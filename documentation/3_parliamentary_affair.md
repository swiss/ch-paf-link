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