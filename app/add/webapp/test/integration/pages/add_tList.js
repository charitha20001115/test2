sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'add',
            componentId: 'add_tList',
            contextPath: '/add_t'
        },
        CustomPageDefinitions
    );
});