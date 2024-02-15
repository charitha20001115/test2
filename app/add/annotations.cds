using MyService as service from '../../srv/service';

annotate service.add_t with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'num1',
            Value : num1,
        },
        {
            $Type : 'UI.DataField',
            Label : 'num2',
            Value : num2,
        },
        {
            $Type : 'UI.DataField',
            Label : 'result',
            Value : result,
        },
    ]
);
annotate service.add_t with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'num1',
                Value : num1,
            },
            {
                $Type : 'UI.DataField',
                Label : 'num2',
                Value : num2,
            },
            {
                $Type : 'UI.DataField',
                Label : 'result',
                Value : result,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
