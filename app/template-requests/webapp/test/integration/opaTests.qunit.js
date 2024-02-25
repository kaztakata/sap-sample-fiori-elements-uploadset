sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'kaztakata/templaterequests/test/integration/FirstJourney',
		'kaztakata/templaterequests/test/integration/pages/TemplateRequestsList',
		'kaztakata/templaterequests/test/integration/pages/TemplateRequestsObjectPage'
    ],
    function(JourneyRunner, opaJourney, TemplateRequestsList, TemplateRequestsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('kaztakata/templaterequests') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTemplateRequestsList: TemplateRequestsList,
					onTheTemplateRequestsObjectPage: TemplateRequestsObjectPage
                }
            },
            opaJourney.run
        );
    }
);