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

The yearly report concerning the status of the motions and postulates is modelled as an activity:

### chpaf:ProceduralRequestReportActivity

### chpaf:ProceduralRequestReportEntity

### chpaf:proceduralRequestReportYear

### Figure

![Procedural Requests Report](./figures/procedural_request_report.svg "Procedural requests report.")

### Example

<aside class="example" title="Procedural Request Report">
    <a href="https://github.com/swiss/ch-paf-link/blob/main/examples/procedural_request_report.ttl" target="_blank">Turtle file</a>.
</aside>

## Proposal

The proposal how the Federal Council wants to handle the motions and postulates is modelled as an activity:

### chpaf:ProceduralRequestProposalActivity

### chpaf:ProceduralRequestConnex

### chpaf:ProceduralRequestEntity

### chpaf:ProceduralRequestProposalEntity

### chpaf:ProceduralRequestProposalSubmitter

### chpaf:proceduralRequestProposal

### Figure

![Procedural Request Proposal](./figures/procedural_request_proposal.svg "Procedural request proposal.")

### Example

<aside class="example" title="Procedural Request Proposal">
    <a href="https://github.com/swiss/ch-paf-link/blob/main/examples/procedural_request_proposal.ttl" target="_blank">Turtle file</a>.
</aside>

## Information

The information about the status of motions and postulates is modelled as an activity:

### chpaf:ProceduralRequestInformationActivity

### chpaf:ProceduralRequestConnex

### chpaf:ProceduralRequestEntity

### chpaf:ProceduralRequestInformationEntity

### chpaf:ProceduralRequestInformationSubmitter

### Figure

![Procedural Request Information](./figures/procedural_request_information.svg "Procedural request information.")

### Example

<aside class="example" title="Procedural Request Information">
    <a href="https://github.com/swiss/ch-paf-link/blob/main/examples/procedural_request_information.ttl" target="_blank">Turtle file</a>.
</aside>
