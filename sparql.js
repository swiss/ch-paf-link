function addSparqlLinks() {
  const defaultEndpoint = "https://ld.admin.ch/query";

  // look for code blocks with class sparql
  document.querySelectorAll("code.sparql").forEach(codeEl => {
    const code = codeEl.textContent.trim();
    const encodedQuery = encodeURIComponent(code);
    const endpoint = codeEl.getAttribute("data-endpoint") || defaultEndpoint;

    const link = document.createElement("a");
    const href = `https://ld.admin.ch/sparql/#query=${encodedQuery}&endpoint=${encodeURIComponent(endpoint)}&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table`;

    link.href = href;
    link.textContent = "▶ Run in SPARQL UI";
    link.target = "_blank";
    link.style.display = "block";
    link.style.marginTop = "0.5em";

    // insert after the parent <pre> if it exists, else after the code itself
    const parent = codeEl.closest("pre") || codeEl;
    parent.insertAdjacentElement("afterend", link);
  });
}