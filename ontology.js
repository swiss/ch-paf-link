async function populateOntology() {
    const rdf = $rdf;
    const store = rdf.graph();
    const ttlFileUrl = './ch-paf-link.ttl';
    const baseUri = new URL(ttlFileUrl, window.location.href).href;
    const contentType = 'text/turtle';

    let prefixes = {};
    try {
      const response = await fetch(ttlFileUrl);
      if (!response.ok) {
        throw new Error(`Failed to load TTL file: ${response.statusText}`);
      }
      const ttlData = await response.text();

      const prefixRegex = /@prefix\s+([a-zA-Z0-9\-]+):\s+<([^>]+)>/g;
      let match;
      while ((match = prefixRegex.exec(ttlData)) !== null) {
        prefixes[match[1]] = match[2];
      }

      rdf.parse(ttlData, store, baseUri, contentType);

      function applyPrefix(uri) {
        for (const prefix in prefixes) {
          if (uri.startsWith(prefixes[prefix])) {
            return uri.replace(prefixes[prefix], `${prefix}:`);
          }
        }
        return uri;
      }

      // Find all sections that start with chpaf-...
      const sections = document.querySelectorAll("section[id^='chpaf-']");
      sections.forEach(section => {
        // Find all headers (h1–h6) within the section
        let headers = section.querySelectorAll("h1, h2, h3, h4, h5, h6");

        // Iterate through each header and extract text after <bdi>

        let subjectUri = null;
        headers.forEach(header => {
          subjectUri = header.childNodes[1]?.textContent.trim(); // Get text node after <bdi>
        });

        // Adjust the SPARQL query to get predicates and objects for the subject
        const sparqlQuery = `
                
          PREFIX chpaf: <https://ch.paf.link/>
          
          SELECT ?predicate ?object WHERE {
            ${subjectUri} ?predicate ?object .
          }
          `;

        const query = rdf.SPARQLToQuery(sparqlQuery, false, store);
        const queryResults = store.querySync(query);

        // Create the table
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered', 'table-striped');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.textContent = 'Predicate';
        const th2 = document.createElement('th');
        th2.textContent = 'Object';
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        queryResults.forEach(result => {
          const row = document.createElement('tr');
          const td1 = document.createElement('td');
          td1.textContent = applyPrefix(result['?predicate'].value);
          const td2 = document.createElement('td');
          td2.textContent = applyPrefix(result['?object'].value);
          row.appendChild(td1);
          row.appendChild(td2);
          tbody.appendChild(row);
        });
        table.appendChild(tbody);

        // Insert the table after the heading
        section.appendChild(table);
      });
    }

    catch (error) {
      console.error('Error generating table:', error);
    }
  }