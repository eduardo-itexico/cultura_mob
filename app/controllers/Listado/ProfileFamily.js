// INSTANTIATION
var APP 	= require("/core");
var DB  	= require("/db");
var args 	= arguments[0] || {};
var params  = args.params;
var action 		= DB.INSERT;

var id_profile = params.id_profile;
DB.init(function(){});

args.toolBar.setTitle("Detail Member");
args.toolBar.setCloseAction(function() {
	( $.nameProfile.getValue() != '' ) && saveAction();
	return true;
});

var args = arguments[0] || {};
var top 		= APP.fixSizeIos7();
var saveButton = Ti.UI.createButton({
	title : "Save",
	right : 5,
	backgroundImage : 'transparent'
}); 
var view		= Ti.UI.createView({width:'100%'});

var user_token	=  APP.getToken({ openLogin:true });//Ti.App.Properties.getString("user_token",false);
var callbackAddedMember 	= null;
var callbackUpdatedMember 	= null;
var self 		= null;
self 			= this;




// ADDITIONS 
view.add(saveButton);

// FUNCTIONS

callbackAddedMember = function(){
	APP.closeWindow();
	params.familyListController.loadUsers();
	
	
};
callbackUpdatedMember = function(){
	APP.closeWindow();
	params.familyListController.loadUsers();
	
};

function actionsClick(e){
	params.familyListController.clickActions(e.source);
}

function loadMember(member){
	Ti.API.warn( 'loadMember >>> member:' + JSON.stringify( member ) );
	if(member){
		//Ti.API.info('MEMBER------------------->'+JSON.stringify(member));
		$.nameProfile.setValue(member.f_name);
		$.lastNameProfile.setValue(member.l_name);
		$.midleNameProfile.setValue(member.m_name);
		$.nickProfile.setValue(member.n_name);
		$.birthdayProfile.setValue(member.birthdate);
		$.genderProfile.setValue(member.gender);
		$.heightProfile.setValue(member.height);
		$.weightProfile.setValue(member.weight);
		$.hairProfile.setValue(member.hair);
		$.eyesProfile.setValue(member.eye);
		$.birthCityProfile.setValue(member.birthcity);
		$.glassesProfile.setValue(member.glasses);
		$.identifyingProfile.setValue(member.marks);
		$.address1Profile.setValue(member.address1);
		$.address2Profile.setValue(member.address2);
		$.cityProfile.setValue(member.city);
		$.stateProfile.setValue(member.state);
		$.zipProfile.setValue(member.zip);
		$.homePhoneProfile.setValue(member.h_phone);
		$.cellPhoneProfile.setValue(member.cell_phone);
		$.name1Profile.setValue(member.name1);
		$.phone1Profile.setValue(member.phone1);
		$.name2Profile.setValue(member.name2);
		$.phone2Profile.setValue(member.phone2);
		//member.blobimage && ($.photoProfile.image = member.blobimage); 
		self.photoMemberURL = member.m_photo;
		self.blobimage 		= member.blobimage;
		self.type			= member.type;
		if(member.blobimage){
			//$.photoProfile.image = "/images/im_mask_large.png";
			var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
			file.write(member.blobimage);
			$.photoProfile.image = file.nativePath;
			if(OS_ANDROID){
                $.photoProfile.image = member.m_photo;
            } 
		}
		$.deleteBtn.id_profile 	= member.id;
		$.shareBtn.id_profile 	= member.id;
		$.shareBtn.photo		= member.m_photo;
		$.shareBtn.blobImage	= member.blobimage;
		$.shareBtn.imgType		= "";//member.blobimage ? member.blobimage.getMimeType().split("/") : "";
		$.helpBtn.photo			= member.m_photo;
		$.helpBtn.blobImage		= member.blobimage;
		$.helpBtn.imgType		= "";//member.blobimage ? member.blobimage.getMimeType().split("/") : "";
		
		//Ti.API.info('IMG-----TYPE----------->'+JSON.stringify($.shareBtn.imgType));
		$.helpBtn.id_profile 	= member.id;
	}
}

function saveAction(){
	var insert = {	token: user_token,
					f_name:$.nameProfile.getValue(),
					l_name:$.lastNameProfile.getValue(),
					m_name:$.midleNameProfile.getValue(),
					n_name:$.nickProfile.getValue(),
					birthdate:$.birthdayProfile.getValue(),
					gender:$.genderProfile.getValue(),
					height:$.heightProfile.getValue(),
					weight:$.weightProfile.getValue(),
					hair:$.hairProfile.getValue(),
					eye:$.eyesProfile.getValue(),
					birthcity:$.birthCityProfile.getValue(),
					glasses:$.glassesProfile.getValue(),
					marks:$.identifyingProfile.getValue(),
					address1:$.address1Profile.getValue(),
					address2:$.address2Profile.getValue(),
					city:$.cityProfile.getValue(),
					state:$.stateProfile.getValue(),
					zip:$.zipProfile.getValue(),
					h_phone:$.homePhoneProfile.getValue(),
					cell_phone:$.cellPhoneProfile.getValue(),
					name1:$.name1Profile.getValue(),
					phone1:$.phone1Profile.getValue(),
					name2:$.name2Profile.getValue(),
					phone2:$.phone2Profile.getValue(),
					m_photo:self.photoMemberURL,
					blobimage:self.blobimage,
					type:APP.USER_MEMBER};
	if(id_profile){
		insert.id = id_profile; 	
	}
	params.familyListController.saveMember(insert, (action == DB.UPDATE) ?callbackUpdatedMember: callbackAddedMember);
}


// CODE
	
	args.toolBar.addCustomView(saveButton); 
	
	if(params.member){
		action = DB.UPDATE;
		loadMember(params.member);
	}else{
		$.actionsContainer.visible = false;
	}

// LSITENERS
saveButton.addEventListener("click",saveAction);

$.avatar_view.addEventListener('click', function(){
	params.familyListController.showAndLoadImage(self,$.photoProfile);		
});



// EXPORTS


