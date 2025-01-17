# Procedural Request

A procedural request is a very specific instrument in parliamentary procedures. It is a request to the government to take an action. The government is obliged to respond to the request within a certain period of time.

## National Parliament

The following classes and properties are used to describe [procedural requests in the context of the Swiss Federal Assembly](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=238) and the Swiss Federal Council. The main procedural requests are motions and postulates.

- **motion**: "a motion instructs the Federal Council to submit a bill to the Federal Assembly or to take a certain measure..." (source: [parlament.ch](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=146))
- **postulate**: "a postulate mandates the Federal Council to examine and report on whether to submit a bill to the Federal Assembly or to take a measure..." (source: [parlament.ch](https://www.parlament.ch/en/%C3%BCber-das-parlament/parlamentsw%C3%B6rterbuch/parlamentsw%C3%B6rterbuch-detail?WordId=177))

## Need for Structured Data Exchange

The procedure so far consists of a PDF document that the Federal Council (compiled by the Federal Chancellery) sends once a year to the Federal Assembly. It contains mainly two chapters:

- Chapter 1: requests for abandonment of motions and postulates because they are fulfilled or no longer relevant
- Chapter 2: report of the fulfillment status of motions and postulates that are older than two years and not ready for request for abandonment

The [parliamentary services of the Federal Assembly](https://www.parlament.ch/en/%C3%BCber-das-parlament/parliamentary-services) have plenty of information about every motion and postulate ready on their [website](https://www.parlament.ch). However, the data from the mentioned report is not available yet because of the unstructured nature of this document. This should be changed with the help fo a structured data exchange between the system of the Federal Chancellery (that compiles the report) and the system of the parliamentary services of the Federal Assembly.

## Identifier

Motions and postulates are identified by a unique identifier that is composed of the following elements:

- 2 digits for the year of the start of the request followed by a point
- 3 or 4 digits as running number of the request in the year

This identifier (e.g. 17.3149) is created by the **Curia Vista** database of the parliamentary services and is sometimes referred to as Curia-ID.

As the identifier of an affair is really important, it is defined as a subclass of a prov:Entity that contains only the identifier.

### Class **chpaf:ParliamentaryAffairIdentifierEntity** {#ParliamentaryAffairIdentifierEntity}

Subclass of paf:IdentifierEntity. Used only with one property: chpaf:parliamentaryAffairIdentifier

### Property **chpaf:parliamentaryAffairIdentifier** {#parliamentaryAffairIdentifier}

The literal containing the identifier of the parliamentary affair.

### URI

The URI of the identifier entity looks like: <https://politics.ld.admin.ch/parliamentary-affair/yy.nnnn> where yy is the year and nnnn is the running number of the request in the year.

## Report

As paf.link is activity based, there is a report activity that groups all the information within a once a year report.

### Class **chpaf:ProceduralRequestReportActivity** {#ProceduralRequestReportActivity}

### Class **chpaf:ProceduralRequestReportEntity** {#ProceduralRequestReportEntity}

### Property **chpaf:proceduralRequestReportYear** {#proceduralRequestReportYear}