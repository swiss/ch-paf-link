# Parliamentary Affairs

## National Parliament Identifier

If an activity is related to a specific parliamentary affair, the activity needs to reference this affair. The parliamentary affairs of the Swiss Federal Assembly are described with the following classes and properties:

### chpaf:ParliamentaryAffairIdentifierEntity

### chpaf:parliamentaryAffairIdentifier

### Figure

![National Parliament Identifier](./figures/national_parliament_identifier.svg "National parliament identifier.")

### Example

<aside class="example" title="National Parliament Identifier">

```turtle
@prefix chpaf: <https://ch.paf.link/> .

<https://politics.ld.admin.ch/parliamentary-affair/17.4017> a chpaf:ParliamentaryAffairIdentifierEntity ;
    chpaf:parliamentaryAffairIdentifier "17.4017"@de .
```

<a href="https://github.com/swiss/ch-paf-link/blob/main/examples/national_parliament_identifier.ttl" target="_blank">Example as .ttl file</a>.

</aside>

## Real Usage

[This SPARQL query](https://ld.admin.ch/sparql/#query=PREFIX%20chpaf%3A%20%3Chttps%3A%2F%2Fch.paf.link%2F%3E%0ASELECT%20%3Fparl%20%3Fid%20WHERE%20%7B%0A%20%3Fparl%20a%20chpaf%3AParliamentaryAffairIdentifierEntity%3B%0A%20%20chpaf%3AparliamentaryAffairIdentifier%20%3Fid.%0A%7D&endpoint=https%3A%2F%2Fld.admin.ch%2Fquery&requestMethod=POST&tabTitle=Query&headers=%7B%7D&contentTypeConstruct=application%2Fn-triples%2C*%2F*%3Bq%3D0.9&contentTypeSelect=application%2Fsparql-results%2Bjson%2C*%2F*%3Bq%3D0.9&outputFormat=table) shows all the parliamentary affairs that are referenced in [LINDAS](https://ld.admin.ch):

```sparql
PREFIX chpaf: <https://ch.paf.link/>
SELECT ?parl ?id WHERE {
 ?parl a chpaf:ParliamentaryAffairIdentifierEntity;
  chpaf:parliamentaryAffairIdentifier ?id.
}
```