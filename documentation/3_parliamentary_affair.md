# Parliamentary Affair

## National Parliament Identifier

If an activity is related to a specific Swiss national parliamentary affair, the activity needs to reference this affair (see [identifier entities in paf.link](https://paf.link#IdentifierEntities)) via `prov:used` to the corresponding `chpaf:ParliamentaryAffairIdentifierEntity`. These entities use only `chpaf:parliamentaryAffairIdentifier` to specify the identifier as string, see the following figure:

![National Parliament Identifier](./figures/national_parliament_identifier.svg "National parliament identifier.")

### Example

<aside class="example" title="National Parliament Identifier">

```turtle
@prefix chpaf: <https://ch.paf.link/> .

<https://politics.ld.admin.ch/parliamentary-affair/17.4017> a chpaf:ParliamentaryAffairIdentifierEntity ;
    chpaf:parliamentaryAffairIdentifier "17.4017"@de .
```

</aside>

### Actual Use

The following sparql query shows all the parliamentary affairs:

```sparql
PREFIX chpaf: <https://ch.paf.link/>

SELECT ?parl ?id WHERE {
 ?parl a chpaf:ParliamentaryAffairIdentifierEntity ;
  chpaf:parliamentaryAffairIdentifier ?id .
}
```

The following sparql query shows all activities, that are related to a national parliamentary affair and therefore link to the corresponding `chpaf:NationalParliamentIdentifierEntity`:

```sparql
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX chpaf: <https://ch.paf.link/>

SELECT ?activity ?id WHERE {
 ?activity prov:used ?entity .
 ?entity a chpaf:ParliamentaryAffairIdentifierEntity ;
  chpaf:parliamentaryAffairIdentifier ?id .
}
```

### Differences to the Pure Schema

According to [paf.link schema](https://paf.link), the following use would also be possible but is discouraged to have standardized elements:

<aside class="example" title="National Parliament Identifier">

```turtle
@prefix chpaf: <https://ch.paf.link/> .
@prefix schema: <http://schema.org/> .

<https://politics.ld.admin.ch/parliamentary-affair/17.4017> a paf:IdentifierEntity, chpaf:ParliamentaryAffair ;
    schema:identifier "17.4017"@de .
```

</aside>