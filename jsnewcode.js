function mbtbig(t){document.write('<ul class="mbtbig">');for(var e=0;ListCount>e;e++){for(var i=ListUrl=ListTitle=ListConten=ListContent=ListImage=thumbUrl=sk="",l=0;l<t.feed.entry[e].link.length&&"alternate"!=t.feed.entry[e].link[l].rel;l++);ListUrl="'"+t.feed.entry[e].link[l].href+"'",null!=t.feed.entry[e].title&&(ListTitle=t.feed.entry[e].title.$t.substr(0,TitleCount)),ListConten=t.feed.entry[e].content.$t,ListContent=ListConten.replace(/(<([^>]+)>)/gi,"").substr(0,ChrCount),t.feed.entry[e].media$thumbnail?(thumbUrl=t.feed.entry[e].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"),ListImage="'"+sk.replace("?imgmax=800","")+"'"):ListImage="'https://1.bp.blogspot.com/-pvkp-GDhosM/Xpn07rHhYaI/AAAAAAABFJg/Q1cppTWDsHMuzVUSAStk_JXhFQ1wPJpvwCLcBGAsYHQ/s1600/seba-default.webp'";var i="<li><a href="+ListUrl+"><img src="+ListImage+" loading='lazy' alt=''/></a><a class='mbttitle' href="+ListUrl+"target='_self'>"+ListTitle+"</a><span class='icontent'>"+ListContent+"</a></span></li>";document.write(i)}document.write("</ul>")}function mbtlist(t){document.write('<ul class="mbtlist">');for(var e=0;ListCount>e;e++){for(var i=ListUrl=ListTitle=ListConten=ListContent=ListImage=thumbUrl=sk="",l=0;l<t.feed.entry[e].link.length&&"alternate"!=t.feed.entry[e].link[l].rel;l++);ListUrl="'"+t.feed.entry[e].link[l].href+"'",null!=t.feed.entry[e].title&&(ListTitle=t.feed.entry[e].title.$t.substr(0,TitleCount)),ListConten=t.feed.entry[e].content.$t,ListContent=ListConten.replace(/(<([^>]+)>)/gi,"").substr(0,ChrCount),t.feed.entry[e].media$thumbnail?(thumbUrl=t.feed.entry[e].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"),ListImage="'"+sk.replace("?imgmax=800","")+"'"):ListImage="'https://1.bp.blogspot.com/-pvkp-GDhosM/Xpn07rHhYaI/AAAAAAABFJg/Q1cppTWDsHMuzVUSAStk_JXhFQ1wPJpvwCLcBGAsYHQ/s1600/seba-default.webp'";var i="<li><a href="+ListUrl+"><img src="+ListImage+" loading='lazy' alt='' width='80px' height= '45px'/></a><a class='mbttitle' href="+ListUrl+"target='_self'>"+ListTitle+"</a><span class='icontent'>"+ListContent+"</a></span></li>";document.write(i)}document.write("</ul>")}function mbtcat(t){document.write('<ul class="mbtlist">');for(var e=1;ListCount>e;e++){for(var i=ListUrl=ListTitle=ListConten=ListContent=ListImage=thumbUrl=sk="",l=0;l<t.feed.entry[e].link.length&&"alternate"!=t.feed.entry[e].link[l].rel;l++);ListUrl="'"+t.feed.entry[e].link[l].href+"'",null!=t.feed.entry[e].title&&(ListTitle=t.feed.entry[e].title.$t.substr(0,TitleCount)),ListConten=t.feed.entry[e].content.$t,ListContent=ListConten.replace(/(<([^>]+)>)/gi,"").substr(0,ChrCount),t.feed.entry[e].media$thumbnail?(thumbUrl=t.feed.entry[e].media$thumbnail.url,sk=thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"),ListImage="'"+sk.replace("?imgmax=800","")+"'"):ListImage="'https://1.bp.blogspot.com/-pvkp-GDhosM/Xpn07rHhYaI/AAAAAAABFJg/Q1cppTWDsHMuzVUSAStk_JXhFQ1wPJpvwCLcBGAsYHQ/s1600/seba-default.webp'";var i="<li><a href="+ListUrl+"><img src="+ListImage+" loading='lazy' alt='' width='80px' height= '45px'/></a><a class='mbttitle' href="+ListUrl+"target='_self'>"+ListTitle+"</a><span class='icontent'>"+ListContent+"</a></span></li>";document.write(i)}document.write("</ul>")}function mbtlistlat(t){document.write('<ul class="mbtlistlat">');for(var e=0;ListCount>e;e++){for(var i=ListUrl=ListTitle="",l=0;l<t.feed.entry[e].link.length&&"alternate"!=t.feed.entry[e].link[l].rel;l++);ListUrl="'"+t.feed.entry[e].link[l].href+"'",null!=t.feed.entry[e].title&&(ListTitle=t.feed.entry[e].title.$t.substr(0,TitleCount)),i="<li><a class='mblttitle' href="+ListUrl+"target='_self'>"+ListTitle+"</a></li>",document.write(i)}document.write("</ul>")}function mbtcatlist(t){document.write('<ul class="mbtlistlat">');for(var e=1;ListCount>e;e++){for(var i=ListUrl=ListTitle="",l=0;l<t.feed.entry[e].link.length&&"alternate"!=t.feed.entry[e].link[l].rel;l++);ListUrl="'"+t.feed.entry[e].link[l].href+"'",null!=t.feed.entry[e].title&&(ListTitle=t.feed.entry[e].title.$t.substr(0,TitleCount)),i="<li><a class='mblttitle' href="+ListUrl+"target='_self'>"+ListTitle+"</a></li>",document.write(i)}document.write("</ul>")}var ListBlogLink=sebahotnews.org,ListCount=5,TitleCount=70,ListLabel=" ",ChrCount=80,ImageSize=400;