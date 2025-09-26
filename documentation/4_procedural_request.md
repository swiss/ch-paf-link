# Procedural Requests

## Background

A procedural request is a very specific instrument in parliamentary procedures. It is a request to the government to take an action. The government is obliged to respond to the request within a certain period of time.

The main [procedural requests in the context of the Swiss Federal Assembly](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=238) and the Swiss Federal Council are motions and postulates:

- **motion**: "a motion instructs the Federal Council to submit a bill to the Federal Assembly or to take a certain measure..." (source: [parlament.ch](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=146))
- **postulate**: "a postulate mandates the Federal Council to examine and report on whether to submit a bill to the Federal Assembly or to take a measure..." (source: [parlament.ch](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=177))

The procedure in handling motions and postulates so far consists of a PDF document that the Federal Council (compiled by the Federal Chancellery) sends once a year to the Federal Assembly. It contains mainly two chapters:

- Chapter 1: requests for abandonment of motions and postulates because they are fulfilled or no longer relevant
- Chapter 2: report of the fulfillment status of motions and postulates that are older than two years and not ready for request for abandonment

The [parliamentary services of the Federal Assembly](https://www.parlament.ch/en/%C3%BCber-das-parlament/parliamentary-services) have plenty of information about every motion and postulate ready on their [website](https://www.parlament.ch). However, the data from the mentioned report is not available yet because of the unstructured nature of this document. This should be changed with the help fo a structured data exchange between the system of the Federal Chancellery (that compiles the report) and the system of the parliamentary services of the Federal Assembly.

## Report

The yearly report concerning the status of the motions and postulates is modelled as an activity with class `chpaf:ProceduralRequestReportActivity` that links to the correspoding year of the report via `chpaf:proceduralRequestReportYear`, see the following figure:

![Procedural Requests Report](./figures/procedural_request_report.svg "Procedural requests report.")

### Example

<aside class="example" title="Procedural Request Report">

```turtle
@prefix chpaf: <https://ch.paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://politics.ld.admin.ch/procedural-request/report/2021/activity> a chpaf:ProceduralRequestReportActivity ;
    prov:used <https://politics.ld.admin.ch/procedural-request/report/2021/entity> ;
    chpaf:proceduralRequestReportYear "2021"^^xsd:gYear ;
    prov:wasInformedBy <https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/activity>, <https://politics.ld.admin.ch/procedural-request/information/2021/18.4276/activity> .
```

</aside>

### Actual Use

The following sparql query shows all the reports:

```sparql
PREFIX chpaf: <https://ch.paf.link/>

SELECT ?activity ?year WHERE {
 ?activity a chpaf:ProceduralRequestReportActivity ;
  chpaf:proceduralRequestReportYear ?year .
}
```

The following query shows the report of a single year in tabular form mimicing the original PDF report:

```sparql
PREFIX chpaf: <https://ch.paf.link/>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX schema: <http://schema.org/>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>

SELECT ?id ?conn_id ?year ?text ?type ?submitter WHERE {
    
    ?ReportActivity prov:wasInformedBy ?Activity ;
        chpaf:proceduralRequestReportYear ?year .
  
    ?Activity prov:used ?Entity ;
        prov:used/chpaf:parliamentaryAffairIdentifier ?id ;
        prov:qualifiedAssociation ?association .
    
    VALUES ?info_prop { chpaf:proceduralRequestProposal chpaf:proceduralRequestInformation }
    ?Entity ?info_prop ?text .
    FILTER(lang(?text) = "de")
    
    VALUES ?role { chpaf:ProceduralRequestProposalSubmitter chpaf:ProceduralRequestInformationSubmitter }
    ?association prov:hadRole ?role ;
    	prov:agent/schema:name ?submitter .
    FILTER(lang(?submitter) = "de")


    # for getting the connex id if it exists (not very elegant, but works)
    OPTIONAL {
        ?Activity a chpaf:ProceduralRequestConnex ;
            prov:used/^prov:used ?MainActivity .
        ?MainActivity prov:used/chpaf:parliamentaryAffairIdentifier ?conn_id .
        ?ReportActivity prov:wasInformedBy ?MainActivity .
        
        FILTER NOT EXISTS {?MainActivity a chpaf:ProceduralRequestConnex .}
    }

    BIND (IF (EXISTS { ?Activity a chpaf:ProceduralRequestProposalActivity }, "proposal", "information") AS ?type)
}
```

## Proposal

The proposal how the Federal Council wants to handle the motions and postulates is modelled as an activity according to the following figure:

![Procedural Request Proposal](./figures/procedural_request_proposal.svg "Procedural request proposal.")

### Example

<aside class="example" title="Procedural Request Proposal">

```turtle
@prefix chpaf: <https://ch.paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/activity> a chpaf:ProceduralRequestProposalActivity ;
    prov:used <https://politics.ld.admin.ch/parliamentary-affair/19.4092> ;
    prov:used <https://politics.ld.admin.ch/parliamentary-affair/19.4092/entity> ;
    prov:used <https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/entity> ;
    prov:qualifiedAssociation <https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/activity/submitter> .

<https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/entity> a chpaf:ProceduralRequestProposalEntity ;
    chpaf:proceduralRequestProposal "Postulato adempiuto con il rapporto del 10 dicembre 2021..."@it ;
    chpaf:proceduralRequestProposal "Rapport du 10 décembre 2021..."@fr ;
    chpaf:proceduralRequestProposal "Postulatsbericht vom 10. Dezember 2021..."@de .

<https://politics.ld.admin.ch/procedural-request/proposal/2021/19.4092/activity/submitter> a prov:Association ;
    prov:agent <https://ld.admin.ch/office/II.1.2> ;
    prov:hadRole chpaf:ProceduralRequestProposalSubmitter .
```

</aside>

### Actual Use

The following sparql query shows all the proposal activities with the actual proposal text in all available languages:

```sparql
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX chpaf: <https://ch.paf.link/>

SELECT ?activity ?proposal WHERE {
 ?activity a chpaf:ProceduralRequestProposalActivity ;
  prov:used/chpaf:proceduralRequestProposal ?proposal .
}
```

## Information

The information about the status of motions and postulates is modelled as an activity according to the following figure:

![Procedural Request Information](./figures/procedural_request_information.svg "Procedural request information.")

### Example

<aside class="example" title="Procedural Request Information">

```turtle
@prefix chpaf: <https://ch.paf.link/> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://politics.ld.admin.ch/procedural-request/information/2021/18.4276/activity> a chpaf:ProceduralRequestInformationActivity ;
    a chpaf:ProceduralRequestConnex ;
    prov:used <https://politics.ld.admin.ch/parliamentary-affair/18.4276> ;
    prov:used <https://politics.ld.admin.ch/parliamentary-affair/18.4276/entity> ;
    prov:used <https://politics.ld.admin.ch/procedural-request/information/2021/18.4238/entity> ;
    prov:qualifiedAssociation <https://politics.ld.admin.ch/procedural-request/information/2021/18.4276/activity/submitter> .

<https://politics.ld.admin.ch/procedural-request/information/2021/18.4238/entity> a chpaf:ProceduralRequestInformationEntity ;
    chpaf:proceduralRequestInformation "Le mozioni hanno portato a diversi lavori di attuazione per la creazione e la pubblicazione di interfacce elettroniche (le cosiddette API, Application Programming Interface)..."@it ;
    chpaf:proceduralRequestInformation "Les motions ont conduit à différents travaux de mise en œuvre en vue de la création et de la publication d’interfaces électroniques (API)..."@fr ;
    chpaf:proceduralRequestInformation "Die Motionen führten zu verschiedenen Umsetzungsarbeiten zur Schaffung und Veröffentlichung elektronischer Schnittstellen (API)..."@de .

<https://politics.ld.admin.ch/procedural-request/information/2021/18.4276/activity/submitter> a prov:Association ;
    prov:agent <https://ld.admin.ch/FCh> ;
    prov:hadRole chpaf:ProceduralRequestInformationSubmitter .
```

</aside>

### Actual Use

The following sparql query shows all the information activities with the actual information text in all available languages:

```sparql
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX chpaf: <https://ch.paf.link/>

SELECT ?activity ?information WHERE {
 ?activity a chpaf:ProceduralRequestInformationActivity ;
  prov:used/chpaf:proceduralRequestInformation ?information .
}
```