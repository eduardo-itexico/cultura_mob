var args 	= arguments[0] || {};
var member 	= args.member;
//Ti.API.info('MEMBERS---------------->'+args.member);
$.viewProfile.id_profile 		=  member.id;
if(member.blobimage){
    //Ti.API.info("[atention] "+JSON.stringify(member));
	var file = Ti.Filesystem.createTempFile(Ti.Filesystem.resourcesDirectory);
	file.write(member.blobimage);
	$.imageProfile.backgroundImage 	= file.nativePath;
	if(OS_ANDROID){
	    $.imageProfile.backgroundImage = member.m_photo;
	}
}
$.nameProfile.text 				= member.f_name +' '+member.m_name + ' ' + member.l_name;
$.kinshipProfile.text			=  member.n_name;