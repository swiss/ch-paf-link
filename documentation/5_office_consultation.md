# Office Consultations

An office consultation is an example of [consultation and comment activities](https://paf.link#consultation-comment-activities). In such a consultation, the submitter of the consultation seeks comments to a draft from different offices.

The activities that are involved are the following:

- Registration Activity (**chpaf:OCoRegistrationActivity**): Registers the already available information in the system. This is the entry into the paf.link realm.
- Consultation Creation Activity (**chpaf:OCoConsultationCreationActivity**): Creates the entities that form the consultation.
- Consultation Registration Activity (**chpaf:OCoConsultationRegistrationActivity**): Registers the consultation in the system. This is an important step because this consultations are registred centrally. This is a subclass of [paf:ConsultationCreationActivity](https://paf.link#ConsultationCreationActivity).
- Consultation Activity (**chpaf:OCoConsultationActivity**): This activity is important for bundling the submitter and receiver of the consultation.
- Comment Activity (**chpaf:OCoCommentActivity**): This activity generates the answer entities to the consultation. Every receiver of the consultation has its own comment activity.

The possible roles are:

- Consultation Registrar (**chpaf:OCoConsultationRegistrar**)
- Consultation Submitter (**chpaf:OCoConsultationSubmitter**)
- Consultation Receiver (**chpaf:OCoConsultationReceiver**)
- Comment Maker (**chpaf:OCoCommentMaker**)

## Example

<aside class="example" title="Office Consultation">
    Full turtle listing for: <a href="https://github.com/swiss/ch-paf-link/blob/main/examples/office_consultation.ttl" target="_blank">Full example on office consultation</a>.
</aside>