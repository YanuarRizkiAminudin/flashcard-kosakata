import re

content = open("public/games/flashcard_lengkap_intact/mandarin_l11.html", encoding="utf-8").read()

# Map: old py value -> correct toned pinyin
fixes = {
    # VOCAB yang belum ada tone
    '"keneng"': '"kěnéng"',
    '"yue"': '"yuē"',
    '"danshi"': '"dànshì"',
    '"jueding"': '"juédìng"',
    '"danxin"': '"dānxīn"',
    '"jinzhang"': '"jǐnzhāng"',

    # SENT - 以前
    '"Wo yiqian zai chuantong yiyuan gongzuo."':
        '"Wǒ yǐqián zài chuántǒng yīyuàn gōngzuò."',
    '"Wo yiqian shi xuesheng."':
        '"Wǒ yǐqián shì xuésheng."',
    '"Ta yiqian zhu zai Taibei."':
        '"Tā yǐqián zhù zài Táiběi."',
    '"Yiqian wo zhu zai Taibei."':
        '"Yǐqián wǒ zhù zài Táiběi."',
    '"Wo yiqian bu xihuan xue Zhongwen, xianzai xihuan le."':
        '"Wǒ yǐqián bù xǐhuān xué Zhōngwén, xiànzài xǐhuān le."',
    '"Wo yiqian bu xihuan xuexi Zhongwen, danshi xianzai hen xihuan le."':
        '"Wǒ yǐqián bù xǐhuān xuéxí Zhōngwén, dànshì xiànzài hěn xǐhuān le."',
    '"Wo chifan yiqian bixu xi shou."':
        '"Wǒ chīfàn yǐqián bìxū xǐ shǒu."',
    '"Chifan yiqian, wo bixu xi shou."':
        '"Chīfàn yǐqián, wǒ bìxū xǐ shǒu."',
    '"Wo qu Taiwan yiqian, xiang xian qu Riben wan."':
        '"Wǒ qù Táiwān yǐqián, xiǎng xiān qù Rìběn wán."',
    '"Qu Taiwan yiqian, wo yao xian qu Riben wan."':
        '"Qù Táiwān yǐqián, wǒ yào xiān qù Rìběn wán."',

    # SENT - 經驗
    '"Ni you gongzuo jingyAn ma?"':
        '"Nǐ yǒu gōngzuò jīngyàn ma?"',
    '"Wo meiyou gongzuo jingyAn."':
        '"Wǒ méiyǒu gōngzuò jīngyàn."',
    '"Wo zai xuexiao you wu nian de gongzuo jingyAn."':
        '"Wǒ zài xuéxiào yǒu wǔ nián de gōngzuò jīngyàn."',
    '"Ni yiqian you shenme gongzuo jingyAn?"':
        '"Nǐ yǐqián yǒu shénme gōngzuò jīngyàn?"',
    '"Wo yiqian you jiaoshi jingyAn."':
        '"Wǒ yǐqián yǒu jiàoshī jīngyàn."',

    # SENT - 幫忙
    '"Mingtian wo bang ni."':
        '"Míngtiān wǒ bāng nǐ."',
    '"Qing ni bang wo na zhuozi shang de shu."':
        '"Qǐng nǐ bāng wǒ ná zhuōzi shàng de shū."',
    '"Xiexie ni bang wo de mang."':
        '"Xièxiè nǐ bāng wǒ de máng."',

    # SENT - 辦法
    '"Wo meiyou banfa."':
        '"Wǒ méiyǒu bànfǎ."',
    '"Wo you banfa, wo gen ni yiqi qu."':
        '"Wǒ yǒu bànfǎ, wǒ gēn nǐ yīqǐ qù."',

    # SENT - 奇怪
    '"Zhege difang hen qiguai."':
        '"Zhège dìfāng hěn qíguài."',
    '"Wo juede zhejian shi hen qiguai."':
        '"Wǒ juéde zhèjiàn shì hěn qíguài."',
    '"Zhen qiguai, wo de shouji zai nali?"':
        '"Zhēn qíguài, wǒ de shǒujī zài nǎlǐ?"',
    '"Zhen qiguai, wo de shouji gangcai zai zheli, xianzai bu jian le."':
        '"Zhēn qíguài, wǒ de shǒujī gāngcái zài zhèlǐ, xiànzài bú jiàn le."',
    '"Zhe ji tian de tianqi hen qiguai."':
        '"Zhè jǐ tiān de tiānqì hěn qíguài."',
    '"Ta de faxing hen qiguai, danshi wo xihuan."':
        '"Tā de fàxíng hěn qíguài, dànshì wǒ xǐhuān."',

    # SENT - 打算/可能/決定
    '"Ni zhoumo you shenme dasuan?"':
        '"Nǐ zhōumò yǒu shénme dǎsuàn?"',
    '"Keneng zhege zhoumo ba."':
        '"Kěnéng zhège zhōumò ba."',
    '"Deng ni jueding le, zai gei wo da dianhua ba."':
        '"Děng nǐ juédìng le, zài gěi wǒ dǎ diànhuà ba."',

    # SENT - 郵件
    '"Qingwen ni de youxiang shi shenme, wo yao gei ni fa wenjian."':
        '"Qǐngwèn nǐ de yóuxiāng shì shénme, wǒ yào gěi nǐ fā wéngjiàn."',
    '"Ni you meiyou shoudao wo gei ni fa de dianziyoujian?"':
        '"Nǐ yǒu méiyǒu shōudào wǒ gěi nǐ fā de diànzǐyóujiàn?"',

    # DIAL
    '"Ni gen na wei xin pengyou jianmian le meiyou?"':
        '"Nǐ gēn nà wèi xīn péngyou jiànmiàn le méiyǒu?"',
    '"Wo hai mei jueding yao bu yao gen ta jianmian."':
        '"Wǒ hái méi juédìng yào bù yào gēn tā jiànmiàn."',
    '"Ni danxin shenme?"':
        '"Nǐ dānxīn shénme?"',
    '"Wo you yidianr jinzhang, wo yiqian meiyou zhEzhong jingyAn, suoyi juede zheyang you yidianr qiguai."':
        '"Wǒ yǒu yīdiǎnr jǐnzhāng, wǒ yǐqián méiyǒu zhèzhǒng jīngyàn, suǒyǐ juéde zhèyàng yǒu yīdiǎnr qíguài."',
    '"Ni bu yao jinzhang, wo you banfa, wo gen ni yiqi qu."':
        '"Nǐ bù yào jǐnzhāng, wǒ yǒu bànfǎ, wǒ gēn nǐ yīqǐ qù."',
    '"Tai hao le, xiexie ni bang wo de mang."':
        '"Tài hǎo le, xièxiè nǐ bāng wǒ de máng."',
    '"Bu keqi. Ni dasuan shenme shihou gen ta jianmian?"':
        '"Bù kèqì. Nǐ dǎsuàn shénme shíhòu gēn tā jiànmiàn?"',
    '"Keneng zhege zhoumo ba. Ruguo ni you kong, wo zai gen ta yue shijian."':
        '"Kěnéng zhège zhōumò ba. Rúguǒ nǐ yǒu kòng, wǒ zài gēn tā yuē shíjiān."',
    '"You kong a, danshi wo mingtian bu hui lai xuexiao, deng ni jueding le, zai gei wo da dianhua ba."':
        '"Yǒu kòng a, dànshì wǒ míngtiān bù huì lái xuéxiào, děng nǐ juédìng le, zài gěi wǒ dǎ diànhuà ba."',

    # QA
    '"YouMei yao gen shei jianmian?"':
        '"Yǒuměi yào gēn shéi jiànmiàn?"',
    '"YouMei dasuan shenme shihou jianmian?"':
        '"Yǒuměi dǎsuàn shénme shíhòu jiànmiàn?"',
    '"Weishenme YouMei juede you dianr qiguai?"':
        '"Wèishénme Yǒuměi juéde yǒu diǎnr qíguài?"',
    '"YiWen gei YouMei shenme banfa?"':
        '"Yíwén gěi Yǒuměi shénme bànfǎ?"',
    '"Mingtian YiWen hui lai xuexiao ma?"':
        '"Míngtiān Yíwén huì lái xuéxiào ma?"',
    '"YouMei he YiWen shi tongguo shenme lai lianxi?"':
        '"Yǒuměi hé Yíwén shì tōngguò shénme lái liánxì?"',
    '"YouMei xianzai gen ta yue shijian le ma?"':
        '"Yǒuměi xiànzài gēn tā yuē shíjiān le ma?"',
}

count = 0
for old, new in fixes.items():
    search = "py:" + old
    replace = "py:" + new
    n = content.count(search)
    if n > 0:
        content = content.replace(search, replace)
        print(f"Fixed: {old[:40]} -> {new[:40]}")
        count += n
    else:
        print(f"NOT FOUND: py:{old[:50]}")

with open("public/games/flashcard_lengkap_intact/mandarin_l11.html", "w", encoding="utf-8") as f:
    f.write(content)

print(f"\nDone! Fixed {count} entries.")
