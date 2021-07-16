
var main = new Vue({
    el: '#app',
    data: {
        isPlaying: false,
        isVisible: false,
        commentShow: false,

        query: "",
        musicList: [],
        comments: [
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "请问您今天要来点far吗",
                    "userId": 419484499,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/Ubd1Ypohh0eqKEruEiE51Q==/109951165729508572.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5174357284,
                "content": "30年fps游戏制作经验，不跳票还有扣人心弦的cg都能让你对这款游戏爱不释手，真正的赛博朋克2077",
                "time": 1607102744783,
                "likedCount": 1479,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": null,
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": -1,
                        "redVipLevel": 2
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "shirt356",
                    "userId": 541317155,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/fdC_rnGYzQTDIrIzqeWI1g==/18775260557884492.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5171394364,
                "content": "虚假的赛博朋克：\n反复跳票\n只做过几次r18内容的萌新\n极高的配置要求\n毫无奖励的预购\n毫无新意的FPS\n真正的赛博朋克：\n说11月27就11月27\n30年研发经验的业界大佬\n是台电脑都能玩\n色到起飞的预购抱枕\n满足所有xp系统的射击游戏\n\n该买谁不用我多说了⑧",
                "time": 1606765125776,
                "likedCount": 1285,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "袜香鲸",
                    "userId": 261776451,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/ACwVJTQcTW8SW1QtjivUjA==/19183179370310830.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5188930588,
                "content": "认真点打就是纯爱了。妹子一离队就去追可以避免所有ntr，特殊情况是樱花祭最后分叉要选人多的那条。还有就是特殊攻略(不可撤收)别全灭。",
                "time": 1608605792229,
                "likedCount": 575,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": {
                        "userType": 4,
                        "identityLevel": 1,
                        "identityIconUrl": "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
                    },
                    "userType": 4,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 4
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "海参-Zoshsgahdnkc",
                    "userId": 384303232,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/t6na3RiugHYvvDu6UPBNjA==/109951164591079999.jpg",
                    "commonIdentity": null,
                    "authStatus": 1
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5184411115,
                "content": "循环好多遍了，主题曲这么活泼快乐的游戏，剧情一定温暖人心吧，不会有不好的事情发生的吧？",
                "time": 1608131700489,
                "likedCount": 430,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "戒色吧吧务",
                    "userId": 119313124,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/6trghIBFz80aKeVzRkMB1w==/109951165404072048.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": {
                    "id": 1113044,
                    "imageUrl": "http://p1.music.126.net/VmCk0RScssHhw-mUxgYYRg==/109951165968054643.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5277653661,
                "content": "孩子病弱失明骨折 送去春销三天专家会诊全治好了 [拜][拜][拜]感谢好心人",
                "time": 1617443343155,
                "likedCount": 301,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "桜利普贝当",
                    "userId": 413803716,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/zN09tw0b2lWrtqcMI7iI7Q==/109951164774279779.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "昵称过于强因此无法显示",
                            "userId": 2106093510,
                            "vipType": 0,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/ECatHrGYBpLOoF2dLaoidQ==/109951165771419374.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5205199121,
                        "content": "笑死了，请你玩过游戏后再来说muse是不是黄油",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": {
                    "id": 5000,
                    "imageUrl": "http://p1.music.126.net/11rU3itRKssu9iI-ly_hOQ==/109951163313124195.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5205876035,
                "content": "你不会以为这是musedash原创曲吧😅",
                "time": 1610359895040,
                "likedCount": 291,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "茔芸",
                    "userId": 563485247,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "shirt356",
                            "userId": 541317155,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/fdC_rnGYzQTDIrIzqeWI1g==/18775260557884492.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5171394364,
                        "content": "虚假的赛博朋克：\n反复跳票\n只做过几次r18内容的萌新\n极高的配置要求\n毫无奖励的预购\n毫无新意的FPS\n真正的赛博朋克：\n说11月27就11月27\n30年研发经验的业界大佬\n是台电脑都能玩\n色到起飞的预购抱枕\n满足所有xp系统的射击游戏\n\n该买谁不用我多说了⑧",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5179593097,
                "content": "a社甚至吧自己板娘拖出来卖了(º﹃º )。。",
                "time": 1607653292985,
                "likedCount": 247,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5171394364,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": -1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "一黑白双翼一",
                    "userId": 313572431,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/B27TgA0KfTojX1XoI1LMyQ==/109951164621999561.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "路过的小黄油玩家",
                            "userId": 411873776,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p3.music.126.net/Ab1kRM3sF6JlTwtFMEhVDQ==/109951163863499116.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5175210612,
                        "content": "为啥现在黄油的歌都要vip了啊",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": {
                    "id": 64202,
                    "imageUrl": "http://p1.music.126.net/tgpg3MG-hOQhBCGDPGa4mQ==/109951165041722146.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5205451438,
                "content": "停一停，你们不在同一频道上啊，上面说的小黄油是指这歌的原本出处，muse是与这个游戏联动的，不是说muse是小黄油[惶恐]",
                "time": 1610296251649,
                "likedCount": 187,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": -1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "路过的小黄油玩家",
                    "userId": 411873776,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/Ab1kRM3sF6JlTwtFMEhVDQ==/109951163863499116.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5175210612,
                "content": "为啥现在黄油的歌都要vip了啊",
                "time": 1607186474499,
                "likedCount": 184,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "Torrer",
                    "userId": 117261051,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/4tA8FqHVT-6ye9I3tGkp7Q==/109951164910271379.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 4,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "海参-Zoshsgahdnkc",
                            "userId": 384303232,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/t6na3RiugHYvvDu6UPBNjA==/109951164591079999.jpg",
                            "commonIdentity": null,
                            "authStatus": 1
                        },
                        "beRepliedCommentId": 5184411115,
                        "content": "循环好多遍了，主题曲这么活泼快乐的游戏，剧情一定温暖人心吧，不会有不好的事情发生的吧？",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5184565200,
                "content": "你醒啦 你被牛了）",
                "time": 1608153879621,
                "likedCount": 163,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5184411115,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "一沐卿尘",
                    "userId": 577756703,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/D4d13OrIAzQfm49qf__2hw==/109951165638641281.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5226844274,
                "content": "其实对于我来说涩图什么的都不重要，玩多娜多娜主要就是想体验一下和几个女同志一块对抗邪恶的资本主义的感觉",
                "time": 1612275777319,
                "likedCount": 134,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "ANenemy",
                    "userId": 312647971,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/bH3bc4UP-R6VzRmVXC_NQw==/109951164206496399.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "路过的小黄油玩家",
                            "userId": 411873776,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p3.music.126.net/Ab1kRM3sF6JlTwtFMEhVDQ==/109951163863499116.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5175210612,
                        "content": "为啥现在黄油的歌都要vip了啊",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5207201171,
                "content": "muse的玩家笑死我了你自己的游戏跟黄油联动了都不知道吗",
                "time": 1610518471174,
                "likedCount": 98,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 6
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "凌-享",
                    "userId": 567928031,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/Vur5WdokEW2jjzRNPwI_hA==/19104014533022612.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": {
                    "id": 7010,
                    "imageUrl": "http://p1.music.126.net/k1tBnnivYogVDZ-4LaJAqA==/109951163313146669.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5195806428,
                "content": "今天的muse dash就打到这里\n浏览器，多娜。。。\n啊我没钱啊，那没事了",
                "time": 1609318930943,
                "likedCount": 90,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": -1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "恭诗先生的汞灯女士",
                    "userId": 96098605,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/p3EMFOgaU7U0bVyuU3FgvQ==/109951165573824578.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5172173060,
                "content": "三次元赛博朋克，不行×\n二次元赛博朋克，行✓",
                "time": 1606864147431,
                "likedCount": 89,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "Sieroy",
                    "userId": 83166418,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/6sipINiv6Z2WeZO9LYxkFQ==/109951165110936271.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "紫绒星",
                            "userId": 287574652,
                            "vipType": 0,
                            "experts": null,
                            "avatarUrl": "https://p3.music.126.net/FiCWZtLpSJu0WvG84mtMzQ==/109951165296548961.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5203432417,
                        "content": "这都不是黄油那啥才是",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": {
                    "id": 83208,
                    "imageUrl": "http://p1.music.126.net/m0Yl_mLhurz_QUnkEK8VBg==/109951165525190298.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5203992163,
                "content": "可能这老哥见多识广觉得只有拔作才能入黄油之列[狗]",
                "time": 1610168409460,
                "likedCount": 84,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "我苏海东不服",
                    "userId": 303033859,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/ffUNSZX-Ph1f2wv_65AEtA==/18937988277142894.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 4,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "海参-Zoshsgahdnkc",
                            "userId": 384303232,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/t6na3RiugHYvvDu6UPBNjA==/109951164591079999.jpg",
                            "commonIdentity": null,
                            "authStatus": 1
                        },
                        "beRepliedCommentId": 5184411115,
                        "content": "循环好多遍了，主题曲这么活泼快乐的游戏，剧情一定温暖人心吧，不会有不好的事情发生的吧？",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5184916958,
                "content": "跟着主线走，只要不要做死，队友不见立刻去救，拼命练级刷装备，然后一直往敌人多的格子走，就可以回避所有的BE和NTR。",
                "time": 1608201610774,
                "likedCount": 79,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5184411115,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "Sieroy",
                    "userId": 83166418,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/6sipINiv6Z2WeZO9LYxkFQ==/109951165110936271.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "绵绵花冰",
                            "userId": 624565380,
                            "vipType": 0,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/iHHdp5jUXjNHDvl1aK8mvw==/109951165667226222.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5202469452,
                        "content": "这个游戏都不是黄游",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": {
                    "id": 83208,
                    "imageUrl": "http://p1.music.126.net/m0Yl_mLhurz_QUnkEK8VBg==/109951165525190298.jpg"
                },
                "showFloorComment": null,
                "status": 0,
                "commentId": 5202569412,
                "content": "“商店逛了么？妹子养了么？指名安排了么？刻印调整了么了么？礼物送了么？事件安排了么？接下来赚钱还是战斗想好了么？……”这么肝的游戏当然不是黄油啦",
                "time": 1610009678873,
                "likedCount": 66,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 6
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "Norman_Beethoven",
                    "userId": 112190612,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/VdgpGv-YtLsmPSP4DgspDA==/18901704393192118.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 4,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "海参-Zoshsgahdnkc",
                            "userId": 384303232,
                            "vipType": 11,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/t6na3RiugHYvvDu6UPBNjA==/109951164591079999.jpg",
                            "commonIdentity": null,
                            "authStatus": 1
                        },
                        "beRepliedCommentId": 5184411115,
                        "content": "循环好多遍了，主题曲这么活泼快乐的游戏，剧情一定温暖人心吧，不会有不好的事情发生的吧？",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5207321078,
                "content": "重视你所该重视的人，这个故事就能走到完美的结局……大概就是这种意思吧",
                "time": 1610531429213,
                "likedCount": 63,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5184411115,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": {
                        "associator": {
                            "vipCode": 100,
                            "rights": true
                        },
                        "musicPackage": null,
                        "redVipAnnualCount": 1,
                        "redVipLevel": 5
                    },
                    "followed": false,
                    "remarkName": null,
                    "nickname": "ANenemy",
                    "userId": 312647971,
                    "vipType": 11,
                    "experts": null,
                    "avatarUrl": "https://p3.music.126.net/bH3bc4UP-R6VzRmVXC_NQw==/109951164206496399.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [
                    {
                        "user": {
                            "locationInfo": null,
                            "liveInfo": null,
                            "anonym": 0,
                            "avatarDetail": null,
                            "userType": 0,
                            "expertTags": null,
                            "mutual": false,
                            "vipRights": null,
                            "followed": false,
                            "remarkName": null,
                            "nickname": "尊贵用户陈先生",
                            "userId": 1499113373,
                            "vipType": 0,
                            "experts": null,
                            "avatarUrl": "https://p4.music.126.net/M6LYfBfdOhNp6vUJknnQ3Q==/109951165796880677.jpg",
                            "commonIdentity": null,
                            "authStatus": 0
                        },
                        "beRepliedCommentId": 5201909902,
                        "content": "笑死了，请你去买一个再来评价",
                        "status": 0,
                        "expressionUrl": null
                    }
                ],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5207242765,
                "content": "你该不会以为这是muse的原创曲吧。。",
                "time": 1610518411888,
                "likedCount": 59,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 5175210612,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            },
            {
                "user": {
                    "locationInfo": null,
                    "liveInfo": null,
                    "anonym": 0,
                    "avatarDetail": null,
                    "userType": 0,
                    "expertTags": null,
                    "mutual": false,
                    "vipRights": null,
                    "followed": false,
                    "remarkName": null,
                    "nickname": "shiooooon",
                    "userId": 341097803,
                    "vipType": 0,
                    "experts": null,
                    "avatarUrl": "https://p4.music.126.net/A2fanBWLxxR-dhAnk0dlAA==/109951164207118049.jpg",
                    "commonIdentity": null,
                    "authStatus": 0
                },
                "beReplied": [],
                "pendantData": null,
                "showFloorComment": null,
                "status": 0,
                "commentId": 5176985971,
                "content": "alicesoft御用画师：🐟介，高饱和上色风格，超喜欢里面的白毛萝莉！冲国特攻！",
                "time": 1607357118635,
                "likedCount": 52,
                "expressionUrl": null,
                "commentLocationType": 0,
                "parentCommentId": 0,
                "decoration": {},
                "repliedMark": null,
                "liked": false
            }
        ],
        musicURL: "http://m701.music.126.net/20210715150950/cf54ab68a49088a2a01dbda780cf9c86/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/5056607597/60a7/95af/5650/abdf280a36812fe87121e275c3e60234.mp3",
        musicCover: "https://p1.music.126.net/lAzoWCwbx2xAalIXFXLREA==/109951165509290232.jpg",
        title: "ドーナドーナのうた",
        author: "月乃",

        rotateDeg: 0,
        clockNum: 0,

        // 播放器信息
        audioInfo: {
            duration: 0,
            currentTime: 0
        }
    },
    // 计算属性，使用方法与data一样： this.progress
    computed: {
        progress() {
            var duration = this.audioInfo.duration || 1;
            var currentTime = this.audioInfo.currentTime;
            return (currentTime / duration) * 100;
        }
    },

    methods: {
        // 获取搜索列表
        getMusicList() {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    that.musicList = response.data.result.songs;
                    console.log(that.musicList);
                }, function (err) {
                    console.log(err);
                })
        },

        // 点击列表播放
        playMusicFromList(musicID) {
            // 获取音源
            this.pauseRotate();
            var that = this;
            axios.get("https://autumnfish.cn/song/url?id=" + musicID)
                .then(function (response) {
                    that.musicURL = response.data.data[0].url;
                    console.log(that.musicURL);
                }, function (err) {
                    console.log(err);
                });

            // 获取封面
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicID)
                .then(function (response) {
                    that.musicCover = response.data.songs[0].al.picUrl;
                    console.log(response);
                    console.log(that.musicCover);
                }, function (err) {
                    console.log(err);
                })

            // 获取曲名
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicID)
                .then(function (response) {
                    that.title = response.data.songs[0].name;
                }, function (err) {
                    console.log(err);
                })

            // 获取作者
            axios.get("https://autumnfish.cn/song/detail?ids=" + musicID)
                .then(function (response) {
                    that.author = response.data.songs[0].ar[0].name;
                }, function (err) {
                    console.log(err);
                })

            // 获取评论
            axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicID)
                .then(function (response) {
                    that.comments = response.data.hotComments;
                    console.log(that.comments);
                }, function (err) {
                    console.log(err);
                })

            this.isPlaying = true;
            this.isVisible = false;
            this.query = "";
            this.voiceStepUp();
            this.startRotate();

        },


        // 播放
        playMusic() {
            var player = document.getElementById('player');
            player.play();
            this.isPlaying = true;

            this.voiceStepUp();
            this.startRotate();
        },
        // 暂停
        pauseMusic() {
            var player = document.getElementById('player');
            setTimeout(function () {
                player.pause();
            }, 1000);
            this.isPlaying = false;

            this.voiceStepOut();
            this.pauseRotate();
        },

        // 下一曲
        nextSong(){
            var length = this.musicList.length;
            console.log(length);
        },


        // 上一曲
        lastSong(){
            var length = this.musicList.length;
            console.log(length);
        },



        // 封面旋转
        startRotate() {
            var rotateDuration = 6;
            var rotateStep = 0.04;

            var that = this;

            var clockNum = setInterval(function () {
                that.rotateDeg += rotateStep;
            }, rotateDuration);

            this.clockNum = clockNum;
        },

        // 暂停封面旋转
        pauseRotate() {
            clearInterval(this.clockNum);
        },

        // 监听音频开始播放
        handleCanPlay(event) {
            // 返回当前音频总长度
            this.audioInfo.duration = event.target.duration;
        },

        // 监听音频当前播放位置
        handleTimeUpdate(event) {
            // 返回当前音频播放位置
            this.audioInfo.currentTime = event.target.currentTime
        },

        // 监听当前音频是否结束
        handleEnd() {
            this.pauseRotate();
        },



        // 时间格式转换
        transformSecToTime(time) {
            var tempTime = Math.floor(time);
            var min = 0;
            var sec = 0;

            if (tempTime > 60) {
                min = Math.floor(tempTime / 60);
                sec = tempTime % 60;
            } else {
                sec = tempTime;
            }

            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;

            return min + ':' + sec;
        },



        // 音量渐变（渐入）
        voiceStepUp() {
            var audio = document.getElementById('player');
            audio.volume = 0;
            var step = 0.05;
            var duration = setInterval(function () {
                audio.volume = Math.min(1, audio.volume + step);
                if (audio.volume >= 1) {
                    clearInterval(duration);
                }
            }, 100)
        },


        // 音量渐变（渐出）
        voiceStepOut() {
            var audio = document.getElementById('player');
            audio.volume = 1;
            var step = 0.05;
            var duration = setInterval(function () {
                audio.volume = Math.max(0, audio.volume - step);
                if (audio.volume <= 0) {
                    clearInterval(duration);
                }
            }, 50)
        },



    }
});
