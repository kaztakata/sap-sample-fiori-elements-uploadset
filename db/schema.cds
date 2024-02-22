namespace kaztakata;

using {
  cuid,
  managed,
} from '@sap/cds/common';

entity TemplateRequests : cuid, managed {
  title               : String;
  description         : String;
  comment             : String;
  attachments         : Association to many Attachments
                          on attachments.templateRequest = $self;
};

@Sdm.Entity
entity Attachments {
  key ID              : String          @Sdm.Field     : {
        type: 'property',
        path: 'cmis:objectId'
      };
      name            : String          @Sdm.Field     : {
        type: 'property',
        path: 'cmis:name'
      };
      contentType     : String          @Core.IsMediaType             @Sdm.Field                       : {
        type: 'property',
        path: 'cmis:contentStreamMimeType'
      };
      content         : LargeBinary     @Core.MediaType: contentType  @Core.ContentDisposition.Filename: name;
      parentIds       : array of String @Sdm.Field     : {
        type: 'property',
        path: 'sap:parentIds'
      };
      templateRequest : Association to TemplateRequests;
}
