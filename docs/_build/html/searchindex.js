Search.setIndex({docnames:["api","index","installing","models","observations","source/modules","source/monet","source/monet.models","source/monet.obs","source/monet.plots","source/monet.util","source/monet.verification","tutorial","tutorial/aqs_pams","tutorial/loading","tutorial/models","why-monet"],envversion:53,filenames:["api.rst","index.rst","installing.rst","models.rst","observations.rst","source/modules.rst","source/monet.rst","source/monet.models.rst","source/monet.obs.rst","source/monet.plots.rst","source/monet.util.rst","source/monet.verification.rst","tutorial.rst","tutorial/aqs_pams.rst","tutorial/loading.rst","tutorial/models.rst","why-monet.rst"],objects:{"":{monet:[6,0,0,"-"]},"monet.models":{basemodel:[7,0,0,"-"],camx:[7,0,0,"-"],cmaq:[7,0,0,"-"],hysplit:[7,0,0,"-"]},"monet.models.basemodel":{BaseModel:[7,1,1,""]},"monet.models.basemodel.BaseModel":{check_z:[7,2,1,""],get_var:[7,2,1,""]},"monet.models.camx":{CAMx:[7,1,1,""]},"monet.models.camx.CAMx":{add_files:[7,2,1,""],add_multiple_fields:[7,2,1,""],check_z:[7,2,1,""],get_dates:[7,2,1,""],get_nox:[7,2,1,""],get_pm10:[7,2,1,""],get_pm25:[7,2,1,""],get_var:[7,2,1,""],select_layer:[7,3,1,""]},"monet.models.cmaq":{CMAQ:[7,1,1,""]},"monet.models.cmaq.CMAQ":{add_files:[7,2,1,""],add_multiple_fields:[7,2,1,""],check_z:[7,2,1,""],get_caf:[7,2,1,""],get_clf:[7,2,1,""],get_dates:[7,2,1,""],get_dust_pm25:[7,2,1,""],get_dust_total:[7,2,1,""],get_ec:[7,2,1,""],get_kf:[7,2,1,""],get_metcro2d_rh:[7,2,1,""],get_naf:[7,2,1,""],get_nh4f:[7,2,1,""],get_no3f:[7,2,1,""],get_nox:[7,2,1,""],get_noy:[7,2,1,""],get_pm10:[7,2,1,""],get_pm25:[7,2,1,""],get_so4f:[7,2,1,""],get_var:[7,2,1,""],open_files:[7,2,1,""],select_layer:[7,3,1,""],set_gridcro2d:[7,2,1,""]},"monet.models.hysplit":{HYSPLIT:[7,1,1,""],ModelBin:[7,1,1,""]},"monet.models.hysplit.HYSPLIT":{add_files:[7,2,1,""],get_var:[7,2,1,""],select_layer:[7,3,1,""]},"monet.models.hysplit.ModelBin":{define_struct:[7,3,1,""],readfile:[7,2,1,""]},"monet.monet":{add_aeronet:[6,4,1,""],add_airnow:[6,4,1,""],add_aqs:[6,4,1,""],add_crn:[6,4,1,""],add_improve:[6,4,1,""],add_ish:[6,4,1,""],add_model:[6,4,1,""],add_obs:[6,4,1,""],add_tolnet:[6,4,1,""],combine:[6,4,1,""]},"monet.obs":{aeronet:[8,0,0,"-"],airnow:[8,0,0,"-"],aqs:[8,0,0,"-"],cems:[8,0,0,"-"],crn:[8,0,0,"-"],epa_util:[8,0,0,"-"],improve:[8,0,0,"-"],ish:[8,0,0,"-"],tolnet:[8,0,0,"-"]},"monet.obs.aeronet":{AERONET:[8,1,1,""],dateparse:[8,4,1,""]},"monet.obs.aeronet.AERONET":{add_data:[8,2,1,""],build_url:[8,2,1,""],calc_550nm:[8,2,1,""],dust_detect:[8,2,1,""],get_columns:[8,2,1,""],read_aeronet:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.airnow":{AirNow:[8,1,1,""]},"monet.obs.airnow.AirNow":{add_data:[8,2,1,""],aggregate_files:[8,2,1,""],build_urls:[8,2,1,""],convert_dates_tofnames:[8,2,1,""],filter_bad_values:[8,2,1,""],get_station_locations:[8,2,1,""],get_station_locations_remerge:[8,2,1,""],read_csv:[8,2,1,""],retrieve:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.aqs":{AQS:[8,1,1,""]},"monet.obs.aqs.AQS":{add_data:[8,2,1,""],build_url:[8,2,1,""],build_urls:[8,2,1,""],change_units:[8,3,1,""],get_species:[8,2,1,""],load_aqs_file:[8,2,1,""],retrieve:[8,2,1,""]},"monet.obs.cems":{CEMSEmissions:[8,1,1,""],addmonth:[8,4,1,""],getdegrees:[8,4,1,""],lbs2kg:[8,4,1,""]},"monet.obs.cems.CEMSEmissions":{add_data:[8,2,1,""],columns_rename:[8,2,1,""],create_location_dictionary:[8,2,1,""],filter_by_time:[8,2,1,""],get_date_fmt:[8,2,1,""],get_location:[8,2,1,""],get_var:[8,2,1,""],latlonfilter:[8,2,1,""],load:[8,2,1,""],match_column:[8,2,1,""],rename:[8,2,1,""],retrieve:[8,2,1,""]},"monet.obs.crn":{crn:[8,1,1,""]},"monet.obs.crn.crn":{add_data:[8,2,1,""],build_url:[8,2,1,""],build_urls:[8,2,1,""],change_units:[8,2,1,""],check_url:[8,3,1,""],get_monitor_df:[8,2,1,""],load_file:[8,2,1,""],retrieve:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.epa_util":{calc_daily_max:[8,4,1,""],check_cmaq_units:[8,4,1,""],convert_statenames_to_abv:[8,4,1,""],ensure_values_indomain:[8,4,1,""],get_epa_location_df:[8,4,1,""],get_region:[8,4,1,""],read_monitor_file:[8,4,1,""],regulatory_resample:[8,4,1,""],write_table:[8,4,1,""]},"monet.obs.improve":{IMPROVE:[8,1,1,""]},"monet.obs.improve.IMPROVE":{add_data:[8,2,1,""],get_date_range:[8,2,1,""],load_hdf:[8,2,1,""],set_daterange:[8,2,1,""]},"monet.obs.ish":{ish:[8,1,1,""]},"monet.obs.ish.ish":{delimit:[8,2,1,""],get_url_file_objs:[8,2,1,""],read_data_frame:[8,2,1,""],read_ish_history:[8,2,1,""],read_sites:[8,2,1,""],subset_sites:[8,2,1,""]},"monet.obs.tolnet":{TOLNet:[8,1,1,""]},"monet.obs.tolnet.TOLNet":{make_xarray_dataset:[8,3,1,""],open_data:[8,2,1,""]},"monet.plots":{colorbars:[9,0,0,"-"],mapgen:[9,0,0,"-"],plots:[9,0,0,"-"],taylordiagram:[9,0,0,"-"]},"monet.plots.colorbars":{cmap_discretize:[9,4,1,""],colorbar_index:[9,4,1,""],noxcmap:[9,4,1,""],o3cmap:[9,4,1,""],pm10cmap:[9,4,1,""],pm25cmap:[9,4,1,""],rhcmap:[9,4,1,""],so2cmap:[9,4,1,""],sradcmap:[9,4,1,""],tempcmap:[9,4,1,""],wscmap:[9,4,1,""]},"monet.plots.mapgen":{draw_map:[9,4,1,""]},"monet.plots.plots":{eight_hr_spatial_scatter:[9,4,1,""],kdeplot:[9,4,1,""],make_spatial_contours:[9,4,1,""],make_spatial_plot:[9,4,1,""],normval:[9,4,1,""],scatter:[9,4,1,""],spatial:[9,4,1,""],spatial_bias_scatter:[9,4,1,""],spatial_scatter:[9,4,1,""],spatial_stat_scatter:[9,4,1,""],taylordiagram:[9,4,1,""],timeseries:[9,4,1,""],wind_barbs:[9,4,1,""],wind_quiver:[9,4,1,""]},"monet.plots.taylordiagram":{TaylorDiagram:[9,1,1,""]},"monet.plots.taylordiagram.TaylorDiagram":{add_contours:[9,2,1,""],add_sample:[9,2,1,""]},"monet.util":{mystats:[10,0,0,"-"],tools:[10,0,0,"-"]},"monet.util.mystats":{AC:[10,4,1,""],E1:[10,4,1,""],ETS:[10,4,1,""],FB:[10,4,1,""],FE:[10,4,1,""],HSS:[10,4,1,""],IOA:[10,4,1,""],MB:[10,4,1,""],ME:[10,4,1,""],MNB:[10,4,1,""],MNE:[10,4,1,""],MNPB:[10,4,1,""],MNPE:[10,4,1,""],MO:[10,4,1,""],MP:[10,4,1,""],MdnB:[10,4,1,""],MdnE:[10,4,1,""],MdnNB:[10,4,1,""],MdnNE:[10,4,1,""],MdnNPB:[10,4,1,""],MdnNPE:[10,4,1,""],MdnO:[10,4,1,""],MdnP:[10,4,1,""],NMB:[10,4,1,""],NME:[10,4,1,""],NMPB:[10,4,1,""],NMPE:[10,4,1,""],NMdnB:[10,4,1,""],NMdnE:[10,4,1,""],NMdnPB:[10,4,1,""],NMdnPE:[10,4,1,""],NO:[10,4,1,""],NOP:[10,4,1,""],NP:[10,4,1,""],PSUTMNPB:[10,4,1,""],PSUTMNPE:[10,4,1,""],PSUTMdnNPB:[10,4,1,""],PSUTMdnNPE:[10,4,1,""],PSUTNMPB:[10,4,1,""],PSUTNMPE:[10,4,1,""],PSUTNMdnPB:[10,4,1,""],PSUTNMdnPE:[10,4,1,""],R2:[10,4,1,""],RM:[10,4,1,""],RMSE:[10,4,1,""],RMSEs:[10,4,1,""],RMSEu:[10,4,1,""],RMdn:[10,4,1,""],STDO:[10,4,1,""],STDP:[10,4,1,""],USUTPB:[10,4,1,""],USUTPE:[10,4,1,""],WDAC:[10,4,1,""],WDIOA:[10,4,1,""],WDMB:[10,4,1,""],WDME:[10,4,1,""],WDMdnB:[10,4,1,""],WDMdnE:[10,4,1,""],WDRMSE:[10,4,1,""],circlebias:[10,4,1,""],d1:[10,4,1,""],matchedcompressed:[10,4,1,""],matchmasks:[10,4,1,""],scores:[10,4,1,""],stats:[10,4,1,""]},"monet.util.tools":{findclosest:[10,4,1,""],kolmogorov_zurbenko_filter:[10,4,1,""],linregress:[10,4,1,""],long_to_wide:[10,4,1,""],search_listinlist:[10,4,1,""],wsdir2uv:[10,4,1,""]},"monet.verification":{combine:[11,0,0,"-"],interpolation:[11,0,0,"-"],verify:[11,0,0,"-"]},"monet.verification.combine":{check_units:[11,4,1,""],combine:[11,4,1,""],get_mapping_table:[11,4,1,""],get_model_fields:[11,4,1,""],merge_obs_and_model:[11,4,1,""]},"monet.verification.interpolation":{find_nearest_latlon_xarray:[11,4,1,""],geotiff_meta_to_areadef2:[11,4,1,""],geotiff_meta_to_areadef:[11,4,1,""],get_gfs_area_def:[11,4,1,""],get_grid_def:[11,4,1,""],get_smops_area_def:[11,4,1,""],interp_latlon:[11,4,1,""]},"monet.verification.verify":{VERIFY:[11,1,1,""]},"monet.verification.verify.VERIFY":{compare_epa:[11,2,1,""],compare_epa_spatial:[11,2,1,""],compare_spatial:[11,2,1,""],compare_surface:[11,2,1,""],point:[11,2,1,""],subset_epa:[11,3,1,""]},monet:{models:[7,0,0,"-"],monet:[6,0,0,"-"],obs:[8,0,0,"-"],plots:[9,0,0,"-"],util:[10,0,0,"-"],verification:[11,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:function"},terms:{"000000e":13,"003000e":13,"006215e":13,"011792e":13,"018000e":13,"070852e":13,"091979e":13,"0x1c1e7f0f28":13,"0x1c2bb1f860":13,"0x1c47460f60":13,"100000e":13,"105874e":13,"10m":[9,13],"110000e":13,"12e3":11,"165860e":13,"17t12":3,"17t13":3,"1e5":8,"1st_max_hour":13,"1st_max_valu":13,"219583e":13,"223728e":13,"2390e":13,"255642e":13,"260000e":13,"280000e":13,"300000e":13,"336468e":13,"33e":13,"393782e":13,"404985e":13,"474708e":13,"478e":13,"493500e":13,"500nm":8,"501618e":13,"5_frm":[4,14],"600000e":13,"685583e":13,"740000e":13,"764996e":13,"800000e":13,"833e":13,"854257e":13,"8hr":[4,14],"959000e":13,"966935e":13,"978275e":13,"982000e":13,"993263e":13,"997000e":13,"997054e":13,"boolean":8,"byte":7,"case":[4,8,13],"class":[4,7,8,9,11,13,14],"default":[4,6,8,9,11,14],"function":[3,4,8,9,13,14],"import":[3,4,13,14,15],"int":9,"long":[4,13,14],"new":[2,13],"op\u00e9rationnel":[4,14],"photom\u00e9tri":[4,14],"public":[4,14],"return":[3,4,6,7,8,9,10,11,14,15],"short":[6,7,8,9,11],"static":[7,8,11,16],"true":[4,7,8,9,11,13,14],"try":[7,13],"var":[3,11],AND:13,AQS:[1,8,12],But:13,CIS:13,ETS:10,For:[1,3,4,7,13,14],NEAR:[4,14],Not:13,OLS:13,Obs:[9,11],RMS:9,The:[2,3,4,7,8,13,14,15],There:[4,13,14],These:7,Uses:8,__class__:8,__path__:[3,15],_setitem_with_index:13,_subplot:13,a25i:3,a25j:3,abbrevi:8,abl:[1,3,4,13,14,15],about:[4,8,9,14],abov:[4,14],absorpt:[4,14],accept:[4,11,14],access:[4,14],acetaldehyd:13,aceton:13,acetonitril:13,acetylen:13,acid:4,acli:3,aclj:3,aconc:[3,15],acp:8,acrolein:13,across:[4,13],acryl:13,acrylonitril:13,act:[4,14],action:[4,14],actual:13,add:[1,4,8,9,13,14],add_aeronet:6,add_airnow:6,add_aq:6,add_contour:9,add_crn:6,add_data:[4,8,13,14],add_fil:7,add_improv:6,add_ish:6,add_meta:8,add_model:6,add_multiple_field:7,add_ob:6,add_sampl:9,add_tolnet:6,adding:8,addit:[4,14],addmonth:8,addon:9,address:13,adj:13,aeci:3,aecj:3,aerocan:[4,14],aeroent:[4,14],aeronet:[1,5,6],aerosol:[4,8,14],aerospan:[4,14],africa:[4,14],after:2,agenc:[4,14],aggreg:[4,14],aggregate_fil:8,agreement:10,agricultur:13,ah2oi:3,ah2oj:3,aic:13,aid:[4,13,14],aim:1,air:[1,3,4,14,15],air_temperatur:8,airdata:[4,13,14],airmon:4,airnow:[1,5,6],airnow_flag:13,airnowu:[4,14],airtoxschool:[4,14],albedo:[4,14],ald2:3,all:[3,4,7,8,11,13,14],allow:[4,13],alm15:[4,14],alm20:[4,14],almucantar:[4,14],along:[4,13,14],alpha:[8,9,11],also:[3,4,13,14,15],alwai:2,amazon:[4,14],ambient:[4,14],amnet:4,amon:4,amount:4,amtic:[4,14],amyl:13,anaconda3:13,anai:3,anaj:3,analysi:[1,12,16],analyz:1,anh4i:3,anh4j:3,ani:[4,8,14],ano3i:3,ano3j:3,anomali:10,anoth:4,aod10:[4,14],aod15:[4,8,14],aod20:[4,14],aod500:8,aod550:8,aod:[1,8],aod_1020:8,aorgai:3,aorgaj:3,aorgbi:3,aorgbj:3,aorgpai:3,aorgpaj:3,aot:[4,14],api:[1,13],append:8,applic:[4,14],aqf_hi:3,aqi:[4,13,14],aqm:[3,15],aqs:[4,5,6,13,14],aqs_param:[8,11],aqsweb:[4,13,14],arang:9,arcco:9,area:[4,11,14],area_def:11,areadefinit:11,arg:9,argument:11,arl:[2,8,13],arr:11,arrai:[2,3,4,7,14,16],array1:10,array2:10,arris:0,ascii:[4,14],asi:[4,14],ask:[0,1],aso4i:3,aso4j:3,aspx:8,assess:[4,14],assist:[3,4,14],assum:[4,8,13,14],assur:[4,14],asymmetri:[4,14],atlant:13,atmospher:[1,4],att:8,attain:[4,14],attribut:[3,8],autom:4,avail:[1,2,3,8,13],averag:13,avg:[4,14],awai:4,axes:13,axessubplot:13,axi:10,baker:1,barb:11,barbs_arg:11,barri:[1,13],base:[4,7,8,9,11,14],basemap:9,basemodel:[5,6],baseurl:8,basic:4,begin:[4,7,8,13,14],below:[7,10],benzen:13,benzyl:13,bera:13,better:[2,4,13,14],between:[8,13,16],bia:[1,10],bic:13,binari:7,block:7,bool:9,bottl:4,bottleneck:2,box:[4,8,14],bromochloromethan:13,bromodichloromethan:13,bromoform:13,bromomethan:13,build:[2,8],build_url:8,butadien:13,butan:13,buten:13,butyl:13,bytes_:7,ca2:4,cad:[4,14],calc_550:8,calc_550nm:8,calc_daily_max:8,calcul:8,calibr:[4,14],call:[4,7,13],camx:[1,5,6],can:[1,2,3,4,8,13,14],canada:4,capabl:[1,3,15],carbon:13,carolina:[4,14],carsnet:[4,14],cartopi:[2,4,13,14],castnet:[4,14],caveat:13,cbsa_nam:13,ccc:8,ccr:[4,13,14],cdate:3,cdump:7,celsiu:8,cem:[1,5,6],cemsemiss:8,center:[4,9,13,14],centuri:7,cesnulyt:8,cfeatur:[4,13,14],cfm:[4,14],change_unit:8,channel:2,char4:7,character:[4,14],charg:4,check:[4,14],check_cmaq_unit:8,check_unit:11,check_url:8,check_z:7,chem:1,chemic:[4,13,14],chemistri:4,chlorid:13,chlorobenzen:13,chloroethan:13,chloroform:13,chloromethan:13,chloropren:13,chloropropen:13,chunksiz:3,cira:[4,8,14],circlebia:10,citi:[8,11,13],city_nam:13,clean:[4,13,14],climat:[1,8],clone:2,cloud:[4,14],cmap:9,cmap_discret:9,cmaq:[1,5,6,8,9],cmaqfil:[3,15],cmatch:8,cmsa_nam:13,cne:[4,14],cnr:[4,14],coastlin:9,cocenctr:7,code:[0,1,8],code_obj:13,coef:13,coeffici:10,coincid:[4,14],col1:9,col2:9,col:[8,9],collabor:[4,14],collect:[4,13,14],collecting_ag:13,collector:4,color:[2,4,9,13,14],colorbar:[5,6],colorbar_index:9,colormap:9,colost:[4,8,14],columbia:13,column:[8,13],columns_renam:8,com:[1,2],combin:[1,5,6,16],comma:8,command:[2,4,9,14],commerci:13,common:[1,3,16],commun:[1,2,4,14],compare_epa:11,compare_epa_spati:11,compare_spati:11,compare_surfac:11,comparison:13,compat:[3,15],complet:[4,7,13,14],compos:4,composit:[1,3,4,13,14,15],compound:13,comprehens:8,comput:[1,4,14],conc:4,concentr:[3,4,7,13,14],cond:13,conda:2,confid:10,configur:13,congress:[4,14],connect:4,constant:9,contain:[4,8,11,14],content:[0,5],continu:[4,8,9,14],contour:9,contractor:[4,14],control:[4,13,14],conveni:[1,4,14],convert:7,convert_dates_tofnam:8,convert_statenames_to_abv:8,coordin:3,copi:[4,13,14],core:[13,16],corrcoef:9,corrcoeff:9,correctli:13,correl:[1,9,10],correspond:8,could:13,count:13,countri:[8,9],county_cod:13,county_nam:13,covari:13,creat:[1,4,8,13,14],create_cbar:9,create_location_dictionari:8,crn2:[5,6],crn:[1,5,6],crs:[4,13,14],crx_vn:8,csn:[4,14],csv:13,ctime:3,current:[1,2,4,8,14],curv:13,cwd:8,cyclohexan:13,cyclopentan:13,d_df:8,dai:[4,8,14],daili:[4,6,11,13,14],daily_44201_2004:13,daily_vocs_2004:13,dask:[2,3],data:[1,3,4,6,7,9,12,16],data_valu:8,dataarrai:3,databas:1,datafram:[4,8,13,14],dataset:[3,4,8,13,14,15,16],datastream:[3,15],datawizard:8,date1:[7,8],date2:[7,8],date:[2,3,4,6,7,8,9,11,13,14],date_of_last_chang:13,date_rang:[4,13,14],datepars:8,daterang:8,datestr:8,datetim:[4,7,8,14],datetime64:3,datum:13,decan:13,decimal_degre:8,decod:7,defin:[4,7,14],define_struct:7,definit:11,degre:8,delimit:8,demonstr:15,dep:13,depend:[1,4,14],depolar:[4,14],deposit:4,depth:[4,14],deriv:[3,4,14],describ:[4,13,14],descript:[4,6,7,8,9,11,13,14],design:[1,4,8],desktop:13,despin:13,detect_dust:8,determin:[4,10,14],develop:[1,3,13,15],deviat:[4,9,10,14],dew:[4,14],df2:[4,14],dfn:11,dia:[9,11],diagram:9,dibromid:13,dibromochloromethan:13,dichlorid:13,dichlorobenzen:13,dichlorodifluoromethan:13,dichloroethan:13,dichloroethen:13,dichloroethylen:13,dichloromethan:13,dichloropropan:13,dichloropropen:13,dictionari:[8,11],diethylbenzen:13,differ:[1,3,8,9,13,15],difficult:2,diffpdf:11,diffscatt:11,digit:7,dimens:3,dimension:[3,16],dimethylbutan:13,dimethylpentan:13,direct:[4,10,13,14],directli:[2,8,9],discret:[9,11],disk:[4,14],displai:15,dissolv:4,distribut:[4,14],district:13,disulfid:13,divers:[4,14],divis:[4,14],djet:9,dmc:[4,14],dmdnload:8,doc:13,document:13,domain:[4,14],done:[2,13],dowload:[4,14],download:[2,4,6,8,13,14],download_fil:13,dpi:9,drang:7,draw_map:[3,9,13],drop:[2,13],drop_latlon:8,dropna:13,dset:[3,7,8,15],dtype:[7,9,13],dtypewarn:13,dubovik:8,durbin:13,dure:4,dust_detect:8,each:[4,7,8,14],easi:[1,16],easier:13,easiest:2,easili:1,edgecolor:11,edu:[4,8,14],effect:[4,14],effici:[10,16],efil:8,eight_hr_spatial_scatt:9,either:[4,8,14],elev:13,els:7,emiss:8,enclosur:4,end:[4,7,8,13,14],england:13,ensur:4,ensure_values_indomain:8,entir:[4,14],environ:2,epa:[1,3,8,11,13,15],epa_region:[8,11,13],epa_util:[5,6],equit:10,err:13,error:[10,13],erupt:[3,15],establish:[4,14],ethan:13,ether:13,ethyl:13,ethylbenzen:13,ethylen:13,ethyltoluen:13,evalu:[1,4,14],event_typ:13,everi:13,exampl:[3,4,9,13,14,15],excel:16,except:[4,14],exec:13,exec_id:3,expand:[4,8,14],explan:[4,14],expos:4,exposur:4,extent:[9,13],extinct:[4,14],extract:15,extrapol:8,fac_id:8,facid:8,facil:[4,8,14],fact:9,factor:[4,14],fals:[4,6,7,8,9,11,13,14],featur:[0,1,4,13,14],fed:8,feder:[4,14],few:13,field:8,fig:9,figsiz:13,figur:[9,13],file:[3,4,7,8,13,14,15],file_object:8,filedesc:3,filelist:8,filenam:[7,8],fill:7,fillarg:[9,11],fillra:7,filter_bad_valu:8,filter_by_tim:8,find:[8,13],find_nearest_latlon_xarrai:11,findclosest:10,findkei:[7,11],first:[3,4,8,13,14,15],first_year_of_data:13,fit:13,fit_df:13,five:4,flag:[4,14],flist:[3,7,15],float32:3,flux:[4,14],flx:[4,14],fname:[6,8],follow:[2,4,7],footer:11,forc:[4,14],forecast:[1,4,14],forg:2,form:[3,11],formaldehyd:13,format:[3,4,8,13,14,15,16],fortran:7,found:[1,4,8,13,14],fraction:10,frame:8,frc:[4,14],freon:13,freq:[4,8,14],from:[1,2,3,4,7,8,9,12,14,15],ftp:8,ftype:3,funnel:4,further:1,futur:[4,14],fv3:1,gage:4,galleri:1,gdnam:3,gdtyp:3,gener:13,geograph:[4,13,14],geometri:11,geotiff:11,geotiff_meta_to_areadef2:11,geotiff_meta_to_areadef:11,get:[3,4,8,13,14],get_caf:7,get_clf:7,get_column:8,get_dat:7,get_date_fmt:8,get_date_rang:8,get_dust_pm25:7,get_dust_tot:7,get_ec:7,get_epa_location_df:8,get_gfs_area_def:11,get_grid_def:11,get_kf:7,get_loc:8,get_mapping_t:11,get_metcro2d_rh:7,get_model_field:11,get_monitor_df:8,get_naf:7,get_nh4f:7,get_no3f:7,get_noi:7,get_nox:7,get_pm10:7,get_pm25:7,get_region:8,get_smops_area_def:11,get_so4f:7,get_speci:8,get_station_loc:8,get_station_locations_remerg:8,get_url_file_obj:8,get_var:[3,7,8],getdegre:8,git:2,github:[0,1,2,13],give:13,given:[4,14,16],glass:4,global:[4,14],gmt_offset:13,goal:1,going:[4,14],gov:[4,8,9,13,14],grdcro2d:[3,15],greatli:[4,14],grid:[3,7,15],gridcro2d:[3,15],gridobj:9,gross:10,ground:[4,14],group:[1,4,14],gsfc:[4,14],guess:7,handl:8,has:[4,14],have:[3,4,8,13,14],hawaiian:[3,15],hdf:13,head:[4,13,14],heidk:10,help:1,helper:[3,4,8,13,14],heptan:13,here:[7,8,13,15],hexachlorobutadien:13,hexan:13,hhmm:8,histori:[3,8],hno3:3,hono:3,host:[4,14],hour:8,hourli:[4,8,14],hourly_44201_2018:[4,14],hous:4,how:[1,4,12,14,15],hss:10,htm:9,html:[4,8,13,14],http:[2,4,8,9,13,14],humid:[4,14],hydrochlor:4,hysplit:[1,5,6],idea:[4,14],imag:11,imaginari:[4,14],implement:[4,9,14],impos:[4,14],improv:[1,4,5,6,14],imshow:9,imshow_arg:11,inch:4,includ:[1,3,4,8,13,14],incovini:[4,14],index:[0,1,4,10,13,14],indic:8,indici:[4,14],individu:[4,14],info:8,inform:[2,4,8,11,13,14],inhous:8,input:[7,11],insensit:4,instal:1,instanc:[4,9,14],institut:[4,14],instruct:1,instrument:[4,14],insu:[4,14],insul:4,int32:3,integr:1,interactiveshel:13,interp_latlon:11,interpol:[5,6,16],introduc:1,intuit:[4,14],inv_typ:[4,8,14],ioa:10,ioapi:[3,15],ioapi_vers:3,ipython:13,ish:[1,5,6],isobutan:13,isobutyl:13,isop:13,isopentan:13,isopren:13,isopropylbenzen:13,issu:0,iter:[8,10],iterat:8,its:[4,14],itself:2,jarqu:13,jet:9,jun:13,just:13,kdeplot:9,keep:[4,14],kei:8,keton:13,known:[4,14],kolmogorov_zurbenko_filt:10,kurtosi:13,kwarg:[4,6,8,9,11,13,14],label:[8,9,11,13],lai:[7,11],land_us:13,last:[7,8],lat:[8,11],lat_max:9,lat_min:9,later:[2,4,13,14],latitud:[3,4,8,13,14],latlonbox:[4,6,8,14],latlonfilt:8,latmax:[4,8,14],latmin:[4,8,14],lbs2kg:8,lbs:8,least:13,legend:13,length:7,less:[4,14],let:[3,4,13,14,15],level:[4,9,14],leverag:[1,8],lib:13,librari:[3,4,13,14],lid:[4,14],lidar:[4,14],like:4,likelihood:13,lill:[4,14],limit:4,line2d:13,line:[8,13],linear:13,linregress:10,list:[3,8,10],llcrnr:8,llnl:9,load:[1,7,8,13,16],load_aqs_fil:8,load_fil:8,load_hdf:8,loc:8,local:[4,8,14],local_site_nam:13,locat:[4,8,14],location_set:13,log:13,lon:[8,11],lon_max:9,lon_min:9,long_to_wid:[10,13],longitud:[3,4,8,13,14],longterm:4,lonmax:[4,8,14],lonmin:[4,8,14],look:[4,7,8,13,14],loop:[8,13],loss:4,lot:13,low_memori:13,lst_date:8,lst_time:8,mai:[2,4,8,13,14],maintain:2,make:13,make_spatial_contour:9,make_spatial_plot:9,make_xarray_dataset:8,manag:[4,14],mandat:[4,14],mani:13,manual:2,map:[2,3,4,13,14],mapgen:[3,5,6],mapping_t:11,marker:[9,11],match_column:8,matchedcompress:10,matchmask:10,matplotlib:[2,4,13,14],matrix:13,max:[4,13,14],maximum:[4,14],maxval:[9,10],mdn:1,mdnb:10,mdne:10,mdnnb:10,mdnne:10,mdnnpb:10,mdnnpe:10,mdno:10,mdnp:10,mean:[2,4,10,13,14],measur:[1,13,16],media:[4,14],median:10,mercuri:4,merge_obs_and_model:11,meta:[1,11],meteorolog:[1,4,13,14],methacryl:13,methan:13,method:[1,7,8,13],method_cod:13,method_nam:13,methyl:[4,13],methylcyclohexan:13,methylcyclopentan:13,methylheptan:13,methylhexan:13,methylpentan:13,metric:1,mfile:7,mg2:4,microphys:[4,14],mid:13,min:13,minut:8,minval:[9,10],mix:13,mnb:10,mne:10,mnpb:10,mnpe:10,mod:10,mod_hat:10,model:[5,6,8,9,10,11,13,16],model_param:11,model_tim:11,modelbin:7,modelvar:9,modif:4,modifi:[4,10],modul:[0,1,5,13],modular:1,monet:[0,2,3,4,13,14,15],monitor:[4,8,13,14],monitor_df:8,monitor_fil:8,monitor_typ:13,monitoring_site_loc:13,month:[8,13],monthli:13,more:[1,2,4,8,13,14,15],most:13,msa_cod:13,msa_nam:13,multipl:[1,8],multiscal:1,must:[2,4,8,14],mystat:[5,6],n2o5:3,nadp:1,name:[3,4,7,8],nan:13,naqfc:1,nasa:[4,14],nasagib:[5,6],nation:[1,4,14],natt:[4,14],natural_earth:9,ncdc:8,ncdump:3,ncf:[3,15],ncol:3,ncolor:[9,11],ncore:[4,14],nearroad:[4,14],need:[2,4,7,8,13,14,16],net:4,netcdf4:2,network:[1,6,8,13],newftp:8,newnam:8,nh4:4,nlai:3,nmb:10,nmdnb:10,nmdne:10,nmdnpb:10,nmdnpe:10,nme:10,nmoc:13,nmpb:10,nmpe:10,no2:[3,4,13,14],no3:[3,4],noaa:[1,2,8],noi:11,noisi:13,non:[4,13,14],nonan:13,none:[6,7,8,9,10,11],nonoxnoi:[4,14],nonrobust:13,nop:10,normal:[8,10],normalis:[4,14],normval:9,north:[4,14],north_centr:11,northeast:11,northern:[4,14],notic:13,now:[4,13,14],nox:[3,4,11,13,14],noxcmap:9,nrow:3,nthik:3,ntn:1,ntr:3,numacc:3,numatkn:3,number:[8,9],numpi:[2,4,7,13,14],nvar:3,o3cmap:9,oar:2,object:[3,4,6,7,8,9,11,15],objtyp:8,obs:[4,5,6,9,10,11,13,14],obscur:13,observ:[10,13,14,16],observation_count:13,observation_perc:13,obstyp:11,obsunit:11,octan:13,offic:[4,14],often:13,ohm:8,ojbect:7,older:2,omnibu:13,one:[4,8,14],onli:[2,4,8,13,14],opaconc:3,open:[1,3,4,7,16],open_data:8,open_fil:[3,7,15],openaq:[1,5,6],oper:[4,14],optic:[4,14],option:[8,13],order:1,org:13,organ:13,origin:3,other:[4,13,14],our:1,out:7,outlet:[4,14],output:[1,3,7,8,15],outreach:[4,14],outsid:[4,14],over:[4,8,13,14],overview:1,ozon:[4,8,11,13,14],ozone_ppb:13,p_alp:3,p_bet:3,p_calc:8,p_daily_calc:8,p_gam:3,pacif:11,packag:[0,1,2,5,13],pad:7,page:[0,1,2,13],pair:[1,10],palett:[2,4,13,14],pam:[1,4,12,14],pamsmain:[4,14],pan:[1,3],panda:[1,2,4,8,13,14,16],parallel:1,param:[4,6,7,8,10,11,13,14],paramet:[6,7,8,9,11],parameter_cod:13,parameter_nam:13,park:[4,14],particular:8,partner:[4,14],path:[3,13,15],pathcollect:13,paxi:10,pcmdi:9,pdf:11,peak:10,pentan:13,penten:13,percent:4,perfect:10,perform:16,period:4,pfn:[4,14],phase:[4,14],photochem:[3,15],photon:[4,14],pip:2,pivot:13,plan:[2,4,14],plant:8,platform:1,pleas:[0,1,13],plot:[1,3,4,5,6,11,13,14,16],plot_typ:11,plotarg:[9,11],plt:[4,13,14],pm10:[4,14],pm10cmap:9,pm10spec:[4,14],pm25:3,pm25cmap:9,pm2:[3,4,11,14],pna:3,poc:[8,13],point:[4,11,16],polar:9,politc:[4,13,14],pollut:[4,14],pollutant_standard:[8,13],port:2,portal:[4,14],post:0,pour:[4,14],power:8,precipit:[4,8,14],predict:[10,13],predominantli:4,prepar:[4,14],preserv:4,print:[3,7,13],prob:13,procedur:4,process:[1,4,14],product:8,program:[4,14],project:[1,4,11,13,14],propag:9,propan:13,properti:[4,14],propylbenzen:13,propylen:13,proven:16,provid:[1,4,14,16],pseudonetcdf:2,psutmdnnp:10,psutmdnnpb:10,psutmnp:10,psutmnpb:10,psutnmdnp:10,psutnmdnpb:10,psutnmp:10,psutnmpb:10,publish:2,pure:2,put:[11,16],pydata:13,pynio:2,pyplot:[4,13,14],pyresampl:[2,11],python3:13,python:[1,2,7,8,16],qcdataset:8,quadrant:9,qualiti:[1,4,14],question:[0,1],quick:[1,12],quickli:[3,15],quit:13,radi:[4,14],radiat:[4,14],radiu:[4,11,14],raingag:4,rang:[7,10,13],rasterio:11,rather:[4,14],ratio:[4,10,14],raw:[4,14],rcolumn:8,rdate:8,rdbu_r:9,rdylbu_r:9,read:[1,3,4,7,8,12,14,15],read_aeronet:8,read_csv:8,read_data_fram:8,read_ish_histori:8,read_monitor_fil:8,read_sit:8,readfil:7,readili:[4,14],readthedoc:13,readwrit:7,real:[4,14],realtim:[4,14],recommend:2,record:[4,7,14],rect:9,reduc:4,refer:[2,8,9],refract:[4,14],refstd:9,regim:[4,14],region:[4,8,11,14],regress:13,regulatory_resampl:8,rel:[4,14],relat:1,relative_humid:8,releas:2,remot:[4,14],renam:8,renameddcol:8,renamedhcol:8,replac:4,report:[4,14],repositori:[4,14],repres:7,reprocess:13,requir:1,resampl:[8,13],research:[1,4,14],reshap:[4,13,14],resid:[4,14],residenti:13,residu:13,resiz:9,resolut:[9,13],result:[13,15],retain:3,retriev:[1,4,8,13,14,16],retriv:[4,14],rh_daily_avg:8,rh_daily_max:8,rh_daily_min:8,rh_flag:8,rh_hr_avg:8,rh_hr_avg_flag:8,rhcmap:9,rhdp:[4,14],rima:[4,14],rin:[4,14],rmdn:10,rmse:[10,16],rmseu:10,road:[4,14],robot:[4,14],robust:13,rocki:11,rolling_frequ:8,root:10,routin:[1,8],row:[8,13],rtp:[4,14],run:16,rural:13,sai:[4,13,14],same:4,sampl:[4,9],sample_dur:13,satellit:[4,14,16],satellitair:[4,14],save:13,savecol:8,savenam:9,scale:[4,14],scan:[4,14],scatter:[1,4,9,11,13,14],scatter_arg:11,school:[4,14],scientif:1,scientist:[4,14],score:[1,10],screen:[4,14],sda10:[4,14],sda15:[4,14],sda20:[4,14],sda:1,sdate:3,seaborn:[2,4,13,14],search:[0,1],search_listinlist:10,searchabl:1,second:8,section:[4,14],see:[2,13],select_lay:7,self:[6,7,8,13],sens:[4,14],sensit:8,separ:8,seper:[4,14],seri:[8,13,16],server:[4,14],servic:[4,14],set:[3,4,8,13,14,15],set_context:13,set_daterang:8,set_gridcro2d:7,set_styl:13,settingwithcopywarn:13,setup:2,sever:[1,3,4,8,14,15],shape:[3,13],should:[7,8],show:13,simpl:[4,13,14],simpli:[3,4],simul:[3,15],sinc:8,singl:[3,4,8,9,11,14],site:[1,4,8,11,13],site_num:13,siteid:13,siz:[4,14],size:[4,13,14],skew:13,skill:[1,10],skinni:8,sky:[4,14],slam:13,slh:4,slice:13,sns:[4,13,14],so2:[3,4,11,14],so2cmap:9,so42:4,so4:4,soil_moisture_100:8,soil_moisture_100_daili:8,soil_moisture_10:8,soil_moisture_10_daili:8,soil_moisture_20:8,soil_moisture_20_daili:8,soil_moisture_50:8,soil_moisture_50_daili:8,soil_moisture_5:8,soil_moisture_5_daili:8,soil_temp_100:8,soil_temp_100_daili:8,soil_temp_10:8,soil_temp_10_daili:8,soil_temp_20:8,soil_temp_20_daili:8,soil_temp_50:8,soil_temp_50_daili:8,soil_temp_5:8,soil_temp_5_daili:8,soil_temperature_5:8,solar:[4,14],solar_radi:8,solarad:8,solarad_daili:8,solarad_flag:8,solarad_max:8,solarad_max_flag:8,solarad_min:8,solarad_min_flag:8,solut:4,some:[2,3,4,13,14,15],sometim:[2,4,14],soon:1,sort:13,sourc:[0,1,4],south_centr:11,southeast:11,space:[1,10,16],spatial:[1,9,16],spatial_bias_scatt:9,spatial_scatt:9,spatial_stat_scatt:9,spec:[4,14],specfic:1,speci:13,speciat:[4,14],speciepg:[4,14],specif:[4,13,14],specifi:[4,7,8,13],spectral:[4,14],speed:[1,4,14],squar:[10,13],sr_flag:8,srad:[4,14],sradcmap:9,srfacc:3,srfatkn:3,ssa:[4,14],st_flag:8,st_type:8,stabl:13,stack:13,staff:9,standard:[4,9,10,13,14],start:[1,4,13,14],stat:[9,10],state:[4,8,9,11,13,14],state_cod:13,state_nam:13,state_resolut:9,statement:[2,7],station:[4,14],statist:[1,13,16],statsmodel:13,std:13,stddev:9,stdo:10,stdp:10,still:[3,15],stime:3,stop:[4,14],store:[3,7,15],string:[4,7,8],structur:[4,14],style:3,styren:13,sub_hourli:8,submodul:[0,5],subpackag:[0,5],subplot:13,subset:13,subset_epa:11,subset_sit:8,suburban:13,suggest:[0,1],sum:[8,13],summari:[6,7,8,9,11,13],suppli:[4,11,14],support:2,sur_temp:8,sur_temp_daily_avg:8,sur_temp_daily_max:8,sur_temp_daily_min:8,sur_temp_daily_typ:8,sur_temp_flag:8,sur_temp_max:8,sur_temp_max_flag:8,sur_temp_min:8,sur_temp_min_flag:8,sur_temp_typ:8,surfac:1,surface_temperatur:8,synerg:[4,14],system:[1,4,8,14],t12:[],t12z:[3,15],t13:[],t_calc:8,t_daily_avg:8,t_daily_max:8,t_daily_mean:8,t_daily_min:8,t_hr_avg:8,t_max:8,t_min:8,tab:[4,14],tabl:[8,13],tabular:16,take:13,taken:8,talk:13,target:13,task:3,taylor:9,taylor_diagram_prim:9,taylordiagram:[5,6,11],temp:[4,14],tempcmap:9,temperatur:[4,13,14],term:[4,14],tert:13,test:9,tetrachlorid:13,tetrachloroethan:13,tetrachloroethylen:13,text:13,tflag:3,than:[4,8,14],thei:[4,7,13,14],them:13,theta:9,thi:[1,2,3,4,8,13,14,15],thousand:[4,14],threashold:8,threat:10,three:[4,14],through:[4,14],thrown:7,tick:13,time:[1,3,4,8,9,10,11,13,14,16],time_loc:13,timeseri:[1,9,11],timeseries_mb:11,timeseries_rms:11,tip:2,titl:[9,11],to_csv:13,togeth:8,tolnet:[1,5,6],toluen:13,tool:[1,4,5,6,13,14,16],tot10:[4,14],tot15:[4,14],tot20:[4,14],total:[4,13,14],toxic:[4,14],train:4,traitement:[4,14],tran:13,transfer:[4,14],transform:11,transport:1,triangl:[4,14],tribal:[4,14],tribe_nam:13,trichloro:13,trichlorobenzen:13,trichloroethan:13,trichloroethylen:13,trichlorofluoromethan:13,trifluoroethan:13,trimethylbenzen:13,trimethylpentan:13,tstep:3,ttn:[4,14],ttnamti1:[4,14],tube:4,tue:13,turn:7,tutori:[1,4,14,15],two:[7,8,13],type:[6,7,8,9,11,13],undecan:13,uniform:4,uniqu:13,unit:[4,8,10,13,14],unit_id:8,unitid:8,univ:[4,14],univers:[4,14],unpair:10,unscreen:[4,14],unstack:[4,14],unverifi:13,upnam:3,urban:[4,13],urcrnr:8,url:8,use:[2,3,4,8,13,14],used:[4,7,8,14,16],useful:13,user:[2,4,13,14],user_global_n:13,user_n:13,uses:[4,14,16],using:[1,2,4,7,8,13,14,16],usingth:2,usutp:10,usutpb:10,utc:13,utc_dat:8,utc_tim:8,utf:7,util:[3,4,5,6,13,14],valid:[4,8,14],valu:[4,8,10,13,14],valuabl:13,variabl:[3,4,7,8,11,13,14,15],varnam:[7,8],vector:8,vehicl:[4,14],verbos:[7,8],veri:13,verif:[5,6],verifi:[5,6],verify2:[5,6],version:[1,2,3,4,8,14],versu:13,vglvl:3,vgtop:3,vgtyp:3,view:[0,1,3,8,13],vinyl:13,vista:[4,14],visual:1,vmax:9,vmin:9,voc:[4,8,13,14],vol:[4,14],volcan:[3,15],volum:[4,14],wai:2,want:[4,13,14],warn:13,water:[4,14],watson:13,wbanno:8,wdac:10,wdate:3,wdioa:10,wdir:[4,9,10,14],wdmb:10,wdmdnb:10,wdmdne:10,wdme:10,wdrmse:10,weather:1,web:[4,14],weekli:13,weight:[7,11],well:[1,4,14],wet:[4,8],wet_flag:8,wgs84:13,what:13,when:16,where:[3,4,8,13,14],which:[4,7,8,14],why:1,wide:13,wind:[4,10,14],wind_1_5:8,wind_barb:9,wind_flag:8,wind_quiv:9,window:[8,10],wisc:4,within:[1,8],without:3,work:[1,16],would:[4,14],wrf:1,writ:[4,14],write_t:8,wscmap:9,wsdir2uv:10,wtime:3,www3:[4,14],www:[4,8,9,13,14],xarrai:[2,3,7],xarray_:16,xcell:3,xcent:3,xo2n:3,xorig:3,xxxxx:8,xxxxxx:8,xylen:13,ycell:3,ycent:3,year:[4,7,8,13,14],yearli:[4,14],yield:8,ylabel:[9,13],yorig:3,you:[2,3,4,8,13,14],yyyi:11,yyyymmdd:8,zero:[7,10],zip:[4,13,14]},titles:["Get in touch","Model and ObservatioN Evalatution Toolkit (MONET)","Installation","Models","Observations","monet","monet package","monet.models package","monet.obs package","monet.plots package","monet.util package","monet.verification package","Tutorial","Tutorial - How to read AQS data from PAMS and do a quick analysis","Loading Point Data","Opening Model Data","Overview: Why MONET?"],titleterms:{AQS:[4,13,14],For:2,aeronet:[4,8,14],airnow:[4,8,14],analysi:13,aod:[4,14],api:0,aqs:8,avail:[4,14],basemodel:7,camx:[3,7,15],cem:[4,8,14],climat:[4,14],cmaq:[3,7,15],colorbar:9,combin:11,comput:2,content:[6,7,8,9,10,11],crn2:8,crn:8,daili:8,data:[8,13,14,15],databas:[4,14],dataset:1,depend:2,epa:[4,14],epa_util:8,evalatut:1,featur:16,from:13,galleri:16,get:[0,1],how:13,hysplit:[3,7],improv:8,instal:2,instruct:2,integr:[4,14],interpol:11,invers:[4,14],ish:8,load:[4,14],mapgen:9,mdn:4,measur:[4,14],model:[1,3,7,15],modul:[6,7,8,9,10,11],monet:[1,5,6,7,8,9,10,11,16],multipl:[4,14],mystat:10,nadp:[4,14],nasagib:8,network:[4,14],ntn:4,obs:8,observ:[1,4],open:15,openaq:[4,8,14],overview:16,packag:[6,7,8,9,10,11],pam:13,parallel:2,plot:[2,9],point:14,product:[4,14],quick:13,read:13,refer:[1,4,14],requir:2,sda:[4,14],specfic:[4,14],submodul:[6,7,8,9,10,11],subpackag:6,support:1,surfac:[4,14],taylordiagram:9,tolnet:8,tool:10,toolkit:1,touch:[0,1],tutori:[12,13],util:10,verif:11,verifi:11,verify2:11,why:16}})