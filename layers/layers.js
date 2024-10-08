var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SHP_Batas_Kota_Malang_1 = new ol.format.GeoJSON();
var features_SHP_Batas_Kota_Malang_1 = format_SHP_Batas_Kota_Malang_1.readFeatures(json_SHP_Batas_Kota_Malang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Batas_Kota_Malang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Batas_Kota_Malang_1.addFeatures(features_SHP_Batas_Kota_Malang_1);
var lyr_SHP_Batas_Kota_Malang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_Batas_Kota_Malang_1, 
                style: style_SHP_Batas_Kota_Malang_1,
                popuplayertitle: "SHP_Batas_Kota_Malang",
                interactive: false,
                title: '<img src="styles/legend/SHP_Batas_Kota_Malang_1.png" /> SHP_Batas_Kota_Malang'
            });
var format_SHP_Jalan_Kota_Malang_2 = new ol.format.GeoJSON();
var features_SHP_Jalan_Kota_Malang_2 = format_SHP_Jalan_Kota_Malang_2.readFeatures(json_SHP_Jalan_Kota_Malang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Jalan_Kota_Malang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Jalan_Kota_Malang_2.addFeatures(features_SHP_Jalan_Kota_Malang_2);
var lyr_SHP_Jalan_Kota_Malang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_Jalan_Kota_Malang_2, 
                style: style_SHP_Jalan_Kota_Malang_2,
                popuplayertitle: "SHP_Jalan_Kota_Malang",
                interactive: false,
                title: '<img src="styles/legend/SHP_Jalan_Kota_Malang_2.png" /> SHP_Jalan_Kota_Malang'
            });
var format_SHP_Optik_Malang_3 = new ol.format.GeoJSON();
var features_SHP_Optik_Malang_3 = format_SHP_Optik_Malang_3.readFeatures(json_SHP_Optik_Malang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP_Optik_Malang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP_Optik_Malang_3.addFeatures(features_SHP_Optik_Malang_3);
var lyr_SHP_Optik_Malang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHP_Optik_Malang_3, 
                style: style_SHP_Optik_Malang_3,
                popuplayertitle: "SHP_Optik_Malang",
                interactive: true,
                title: '<img src="styles/legend/SHP_Optik_Malang_3.png" /> SHP_Optik_Malang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SHP_Batas_Kota_Malang_1.setVisible(true);lyr_SHP_Jalan_Kota_Malang_2.setVisible(true);lyr_SHP_Optik_Malang_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SHP_Batas_Kota_Malang_1,lyr_SHP_Jalan_Kota_Malang_2,lyr_SHP_Optik_Malang_3];
lyr_SHP_Batas_Kota_Malang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Luasan_Ha': 'Luasan_Ha', 'Nilai': 'Nilai', 'bobot_kp': 'bobot_kp', 'tb_kp': 'tb_kp', 'jumlah_SM': 'jumlah_SM', 'nilai_sm': 'nilai_sm', 'bobot_sm': 'bobot_sm', 'tb_sm': 'tb_sm', 'total': 'total', 'kelas': 'kelas', 'NAMA1': 'NAMA1', 'ID': 'ID', 'Lembar': 'Lembar', 'Skala': 'Skala', 'HEHEHEHE': 'HEHEHEHE', 'FID_1': 'FID_1', 'LUASAR': 'LUASAR', 'JMLHPEN': 'JMLHPEN', 'KPDTNPEN': 'KPDTNPEN', });
lyr_SHP_Jalan_Kota_Malang_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SHP_Optik_Malang_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMA_OPTIK': 'NAMA_OPTIK', 'ALAMAT': 'ALAMAT', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'KOTA': 'KOTA', 'PROVINSI': 'PROVINSI', 'KODE_POS': 'KODE_POS', 'NEGARA': 'NEGARA', 'NO__TELEPO': 'NO__TELEPO', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', });
lyr_SHP_Batas_Kota_Malang_1.set('fieldImages', {'OBJECTID': '', 'WADMKC': '', 'Shape_Leng': '', 'Shape_Area': '', 'Luasan_Ha': '', 'Nilai': '', 'bobot_kp': '', 'tb_kp': '', 'jumlah_SM': '', 'nilai_sm': '', 'bobot_sm': '', 'tb_sm': '', 'total': '', 'kelas': '', 'NAMA1': '', 'ID': '', 'Lembar': '', 'Skala': '', 'HEHEHEHE': '', 'FID_1': '', 'LUASAR': '', 'JMLHPEN': '', 'KPDTNPEN': '', });
lyr_SHP_Jalan_Kota_Malang_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SHP_Optik_Malang_3.set('fieldImages', {'OBJECTID': '', 'NAMA_OPTIK': '', 'ALAMAT': '', 'KELURAHAN': '', 'KECAMATAN': '', 'KOTA': '', 'PROVINSI': '', 'KODE_POS': '', 'NEGARA': '', 'NO__TELEPO': '', 'LONGITUDE': '', 'LATITUDE': '', });
lyr_SHP_Batas_Kota_Malang_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Luasan_Ha': 'no label', 'Nilai': 'no label', 'bobot_kp': 'no label', 'tb_kp': 'no label', 'jumlah_SM': 'no label', 'nilai_sm': 'no label', 'bobot_sm': 'no label', 'tb_sm': 'no label', 'total': 'no label', 'kelas': 'no label', 'NAMA1': 'no label', 'ID': 'no label', 'Lembar': 'no label', 'Skala': 'no label', 'HEHEHEHE': 'no label', 'FID_1': 'no label', 'LUASAR': 'no label', 'JMLHPEN': 'no label', 'KPDTNPEN': 'no label', });
lyr_SHP_Jalan_Kota_Malang_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SHP_Optik_Malang_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMA_OPTIK': 'no label', 'ALAMAT': 'no label', 'KELURAHAN': 'no label', 'KECAMATAN': 'no label', 'KOTA': 'no label', 'PROVINSI': 'no label', 'KODE_POS': 'no label', 'NEGARA': 'no label', 'NO__TELEPO': 'no label', 'LONGITUDE': 'no label', 'LATITUDE': 'no label', });
lyr_SHP_Optik_Malang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});