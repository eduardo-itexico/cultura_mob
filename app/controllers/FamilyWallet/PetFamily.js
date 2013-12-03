// INSTANTIATION
var APP 	= require("/core");
var DB  	= require("/db");
var args 	= arguments[0] || {};
var params  = args.params;

var id_profile = params.id_profile;
DB.init(function(){});

args.toolBar.setTitle("Detail Pet");
args.toolBar.setCloseAction(function() {
	( $.nameProfile.getValue() != '' ) && saveAction();
	return true;
});

var args = arguments[0] || {};
var top 		= APP.fixSizeIos7();
var saveButton 	= Ti.UI.createButton({title:"Save",right:5,backgroundImage:'transparent'});
var view		= Ti.UI.createView({width:'100%'});

var user_token	=  APP.getToken({ openLogin:true });
var callbackAddedMember 	= null;
var callbackUpdatedMember 	= null;
var self 		= null;
self 			= this;
var action 		= DB.INSERT;



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
	
	//hideKeyboard($.secondContainer)
};

function loadMember(member){
	if(member){
		//Ti.API.info('MEMBER------------------->'+JSON.stringify(member));
		$.nameProfile.setValue(member.f_name);
		$.typeProfile.setValue(member.l_name);
		$.breedProfile.setValue(member.m_name);
		$.ageProfile.setValue(member.n_name);
		$.sexProfile.setValue(member.birthdate);
		$.colorProfile.setValue(member.gender);
		$.microchipProfile.setValue(member.height);
		$.weightProfile.setValue(member.weight);
		$.identifyingProfile.setValue(member.marks);
		
		$.specialsProfile.setValue(member.hair);
		$.firstNameProfile.setValue(member.name1);
		$.lastNameProfile.setValue(member.name2);
		$.addressOwnerProfile.setValue(member.address1);
		$.homePhoneProfile.setValue(member.h_phone);
		$.cellPhoneProfile.setValue(member.cell_phone);
		$.veterinarianProfile.setValue(member.eye);
		$.addressVeterinarianProfile.setValue(member.address2);
		$.phoneVeterinarianProfile.setValue(member.phone1);
		
		//member.blobimage && ($.photoProfile.image = member.blobimage); 
		self.photoMemberURL = member.m_photo;
		self.blobimage 		= member.blobimage;
		self.type			= member.type;
		
		if(member.blobimage){
			$.photoProfile.image = "/images/im_mask_large.png";
			var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
			file.write(member.blobimage);
			$.photoProfile.image = file.nativePath;
			if(OS_ANDROID){
                $.photoProfile.image = member.m_photo;
            } 
		}
		
		$.deleteBtn.id_profile 	= member.id;
		$.shareBtn.id_profile 	= member.id;
		$.helpBtn.photo		= member.m_photo;
		$.helpBtn.blobImage	= member.blobimage;
		$.helpBtn.imgType		= "";//member.blobimage ? member.blobimage.getMimeType().split("/"): "";
		//Ti.API.info('IMG-----TYPE----------->'+JSON.stringify($.shareBtn.imgType));
		$.helpBtn.id_profile 	= member.id;
	}
}

function actionsClick(e){
	params.familyListController.clickActions(e.source);
}
/*
function hideKeyboard(container){
	var inputs = container.children;
	for(var i=0; i < inputs.length; i++ ){
		var element = inputs[i];
		Ti.API.info('ELEMENTO-----' + JSON.stringify(element));
	}
}
*/

function saveAction(){
	var insert = {	token: user_token,
					f_name:$.nameProfile.getValue(),
					l_name:$.typeProfile.getValue(),
					m_name:$.breedProfile.getValue(),
					n_name:$.ageProfile.getValue(),
					birthdate:$.sexProfile.getValue(),
					gender:$.colorProfile.getValue(),
					height:$.microchipProfile.getValue(),
					weight:$.weightProfile.getValue(),
					marks:$.identifyingProfile.getValue(),
					hair:$.specialsProfile.getValue(),
					name1:$.firstNameProfile.getValue(),
					name2:$.lastNameProfile.getValue(),
					address1:$.addressOwnerProfile.getValue(),
					h_phone:$.homePhoneProfile.getValue(),
					cell_phone:$.cellPhoneProfile.getValue(),
					eye:$.veterinarianProfile.getValue(),
					address2:$.addressVeterinarianProfile.getValue(),
					phone1:$.phoneVeterinarianProfile.getValue(),
					m_photo:self.photoMemberURL,
					blobimage:self.blobimage,
					type:APP.PET_MEMBER};
	if(id_profile){
		insert.id = id_profile; 	
	}
	params.familyListController.saveMember(insert, (action == DB.UPDATE) ?callbackUpdatedMember: callbackAddedMember);
}

// CODE
	
	
	args.toolBar.addCustomView(saveButton); 
	
	if(id_profile){
		var member = DB.getMember(id_profile,function(){});
		loadMember(member[0]);
		action = DB.UPDATE;
	}else{
		$.actionsContainer.visible = false;
	}





$.avatar_view.addEventListener('click', function(){
	params.familyListController.showAndLoadImage(self,$.photoProfile);		
});


saveButton.addEventListener("click",saveAction);