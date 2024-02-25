using {kaztakata as db} from '../db/schema';

@requires: ['authenticated-user']
service UserService {

  @odata.draft.enabled
  entity TemplateRequests as
    projection on db.TemplateRequests
    excluding {
      modifiedAt,
      modifiedBy,
    };

  entity Attachments      as projection on db.Attachments;

}