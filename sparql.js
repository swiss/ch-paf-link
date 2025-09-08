// in config.js or inside postProcess
function addSparqlLinks(doc) {
  const endpoint = "https://ld.admin.ch/query";
  doc.querySelectorAll("pre.sparql").forEach(pre => {
    const code = pre.textContent.trim();
    const encodedQuery = encodeURIComponent(code);
    const link = document.createElement("a");

    // build the full URL
    const href = `https://ld.admin.ch/sparql/#query=${encodedQuery}&endpoint=${encodeURIComponent(endpoint)}&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table`;

    link.href = href;
    link.textContent = "▶ Run in SPARQL UI";
    link.target = "_blank";
    link.style.display = "block";
    link.style.marginTop = "0.5em";

    pre.insertAdjacentElement("afterend", link);
  });
}

var respecConfig = {
  // ... your existing config ...
  postProcess: [addSparqlLinks]
};
