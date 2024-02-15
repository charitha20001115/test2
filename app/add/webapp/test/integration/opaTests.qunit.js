sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'add/test/integration/FirstJourney',
		'add/test/integration/pages/add_tList',
		'add/test/integration/pages/add_tObjectPage'
    ],
    function(JourneyRunner, opaJourney, add_tList, add_tObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('add') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheadd_tList: add_tList,
					onTheadd_tObjectPage: add_tObjectPage
                }
            },
            opaJourney.run
        );
    }
);