/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"dp"] forKey:@"ti.ui.defaultunit"];
	[_property setObject:[TiUtils stringValue:@"test"] forKey:@"ti.deploytype"];
	[_property setObject:[NSNumber numberWithBool:[TiUtils boolValue:@"true"]] forKey:@"ti.android.fastdev"];
	[_property setObject:[NSNumber numberWithBool:[TiUtils boolValue:@""]] forKey:@"ti.android.debug"];
	[_property setObject:[NSNumber numberWithBool:[TiUtils boolValue:@"true"]] forKey:@"ti.android.bug2373.finishfalseroot"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end