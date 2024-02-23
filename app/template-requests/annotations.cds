using UserService as service from '../../srv/user-service';

annotate service.TemplateRequests with @(UI: {UpdateHidden,DeleteHidden});
annotate service.TemplateRequests with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : ID,
            Label : 'ID',
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>title}',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Value : createdBy,
        },
        {
            $Type : 'UI.DataField',
            Value : createdAt,
        },
    ]
);
annotate service.TemplateRequests with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : title,
                Label : '{i18n>title}',
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>description}',
                Value : description,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : '{i18n>generalInformation}',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>comment}',
            ID : 'Comment',
            Target : '@UI.FieldGroup#Comment',
        },
    ]
);
annotate service.TemplateRequests with @(
    UI.HeaderInfo : {
        Title : {
            $Type : 'UI.DataField',
            Value : title,
        },
        TypeName : '',
        TypeNamePlural : '',
        Description : {
            $Type : 'UI.DataField',
            Value : ID,
        },
    }
);
annotate service.TemplateRequests with {
    description @UI.MultiLineText : true
};
annotate service.TemplateRequests with @(
    UI.FieldGroup #Comment : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : comment,
                Label : '{i18n>comment}',
            },],
    }
);
annotate service.TemplateRequests with {
    comment @UI.MultiLineText : true
};

