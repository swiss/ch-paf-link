# Office Consultations

An office consultation is an example of [consultation and comment activities](https://paf.link#consultation-comment-activities). In such a consultation, the submitter of the consultation seeks comments to a draft from different offices.

## Activity Stream

The activity stream of an office consultation looks like this:

- **chpaf:OCoCreationActivity**: creates the identifier entity and the actual consultation entity.
- **chpaf:OCoRegistrationActivity**: registers the consultation in the ict system that manages the consultation.
- **chpaf:OCoActivity**: bundles the identifier entities and the actual consultation entity with the consultation creator and the beginning and end dates of the consultation process.
- **chpaf:OCoCommentActivity**: creates the comment entities for an office that is invited to comment. One such activity for each participating office is needed.

## Entities

The involved entities are:

- an identifier entity (**chpaf:OCoIdentifierEntity**).
- the actual consultation entity (**chpaf:OCoEntity**).
- the comment entities (**chpaf:OCoCommentEntity**).

## Roles

The possible roles are:

- **chpaf:OCoCreator**: the creator of the consultation.
- **chpaf:OCoRegistrar**: the registrar of the consultation.
- **chpaf:OCoReceiver**: the office invited to comment.
- **chpaf:OCoCommentCreator**: the creator of a comment.

## Example

<aside class="example" title="Office Consultation">
    Full turtle listing for: <a href="https://github.com/swiss/ch-paf-link/blob/main/examples/office_consultation.ttl" target="_blank">Full example on office consultation</a>.
</aside>