ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32633").setExtent([386653.599134, 4486001.235664, 499208.465658, 4555717.180102]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI1990base_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI 1990 - base",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI1990base_1.png",
    attributions: ' ',
                                projection: 'EPSG:32633',
                                alwaysInRange: true,
                                imageExtent: [398370.000000, 4478460.000000, 483690.000000, 4553370.000000]
                            })
                        });
var lyr_NDVIJan2017_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI Jan 2017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVIJan2017_2.png",
    attributions: ' ',
                                projection: 'EPSG:32633',
                                alwaysInRange: true,
                                imageExtent: [398370.000000, 4478460.000000, 483690.000000, 4553370.000000]
                            })
                        });
var lyr_NDVIAug2017_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI Aug 2017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVIAug2017_3.png",
    attributions: ' ',
                                projection: 'EPSG:32633',
                                alwaysInRange: true,
                                imageExtent: [398370.000000, 4478460.000000, 483690.000000, 4553370.000000]
                            })
                        });
var lyr_NDVIdifferencebetweenJan2017andAug2017_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI difference between Jan 2017 and Aug 2017",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVIdifferencebetweenJan2017andAug2017_4.png",
    attributions: ' ',
                                projection: 'EPSG:32633',
                                alwaysInRange: true,
                                imageExtent: [398370.000000, 4478460.000000, 483690.000000, 4553370.000000]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVI1990base_1.setVisible(true);lyr_NDVIJan2017_2.setVisible(true);lyr_NDVIAug2017_3.setVisible(true);lyr_NDVIdifferencebetweenJan2017andAug2017_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVI1990base_1,lyr_NDVIJan2017_2,lyr_NDVIAug2017_3,lyr_NDVIdifferencebetweenJan2017andAug2017_4];
