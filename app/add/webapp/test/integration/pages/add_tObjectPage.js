sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'add',
            componentId: 'add_tObjectPage',
            contextPath: '/add_t'
        },
        CustomPageDefinitions
    );
});