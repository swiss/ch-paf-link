import requests
import pandas as pd
from rdflib import Graph

pd.set_option("display.max_rows", None)     # show all rows
pd.set_option("display.max_columns", None)  # show all columns
pd.set_option("display.max_colwidth", None) # don't truncate long strings
pd.set_option("display.width", None)        # don't wrap columns into new line

def query_endpoint(endpoint: str, query: str) -> pd.DataFrame:
    """
    Run a SPARQL query against a remote endpoint and return a pandas DataFrame.
    """
    headers = {"Accept": "application/sparql-results+json"}
    r = requests.post(endpoint, data={"query": query}, headers=headers)
    r.raise_for_status()
    data = r.json()
    cols = data["head"]["vars"]
    rows = [[row.get(c, {}).get("value") for c in cols] for row in data["results"]["bindings"]]
    return pd.DataFrame(rows, columns=cols)

def query_ttl(ttl: str, query: str) -> pd.DataFrame:
    """
    Run a SPARQL query against a turtle string and return a pandas DataFrame.
    """
    g = Graph()
    g.parse(data=ttl, format="turtle")
    res = g.query(query)
    cols = [str(v) for v in res.vars]
    rows = [[str(v) for v in r] for r in res]
    return pd.DataFrame(rows, columns=cols)