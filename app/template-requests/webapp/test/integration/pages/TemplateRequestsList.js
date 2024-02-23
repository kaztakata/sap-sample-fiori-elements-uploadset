sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'kaztakata.templaterequests',
            componentId: 'TemplateRequestsList',
            contextPath: '/TemplateRequests'
        },
        CustomPageDefinitions
    );
});