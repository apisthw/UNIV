/* TCAS69 รอบ 3 Admission — คะแนนสูงสุด-ต่ำสุด คณะวิศวกรรมศาสตร์
   เฉพาะมหาวิทยาลัยเป้าหมาย (3 พระจอมฯ + จุฬาฯ + ธรรมศาสตร์ + เกษตรฯ + มหิดล + ศิลปากร + เชียงใหม่ + ขอนแก่น + สงขลานครินทร์ + สุรนารี)
   แหล่งที่มา: TCAS69-R3-MinMax.pdf (การประมวลผลครั้งที่ 1 ณ 20 พ.ค.2569) */

window.KEMTID_DATA = window.KEMTID_DATA || {};
window.KEMTID_DATA.tcasScores = {
  updated: '2026-07-14',
  source: 'ไฟล์ TCAS69-R3-MinMax.pdf (การประมวลผลครั้งที่ 1 ณ วันที่ 20 พ.ค.2569)',
  disclaimer: 'ควรตรวจสอบกับ mytcas.com และประกาศทางการของแต่ละสถาบันก่อนตัดสินใจ — คะแนนในการประมวลผลครั้งที่ 2 อาจเปลี่ยนแปลง',
  universities: [
    /* ===== 3 พระจอมฯ ===== */

    // ────────── สจล. (ลาดกระบัง) ──────────
    { id:'kmitl', name:'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', short:'สจล.', campus:'ลาดกระบัง', color:'accent',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:1044, minScore:62.8582, maxScore:76.2637, link:'#bank-alevel-math1' },
        { name:'วิศวกรรมคอมพิวเตอร์ (นานาชาติ)', quota:5, applicants:103, minScore:61.9294, maxScore:63.8565 },
        { name:'วิศวกรรมคอมพิวเตอร์และความปลอดภัยไซเบอร์', quota:5, applicants:430, minScore:62.0883, maxScore:69.7533 },
        { name:'วิศวกรรมไฟฟ้า', quota:30, applicants:972, minScore:62.5667, maxScore:71.2198, highlight:true },
        { name:'วิศวกรรมไฟฟ้า (นานาชาติ)', quota:5, applicants:77, minScore:58.4486, maxScore:60.4713 },
        { name:'วิศวกรรมไฟฟ้าสื่อสารและเครือข่าย', quota:10, applicants:260, minScore:58.1907, maxScore:64.9314, highlight:true },
        { name:'วิศวกรรมเครื่องกล', quota:5, applicants:684, minScore:62.5725, maxScore:65.7502 },
        { name:'วิศวกรรมเครื่องกล (นานาชาติ)', quota:2, applicants:88, minScore:55.7072, maxScore:56.0142 },
        { name:'วิศวกรรมเคมี', quota:10, applicants:492, minScore:58.9527, maxScore:60.7105 },
        { name:'วิศวกรรมโยธา', quota:15, applicants:941, minScore:59.2807, maxScore:65.1148 },
        { name:'วิศวกรรมโยธา (นานาชาติ)', quota:5, applicants:89, minScore:53.7631, maxScore:57.3731 },
        { name:'วิศวกรรมอุตสาหการ', quota:20, applicants:730, minScore:58.5500, maxScore:62.5015 },
        { name:'วิศวกรรมอุตสาหการ+โลจิสติกส์ (นานาชาติ)', quota:5, applicants:60, minScore:54.0931, maxScore:58.4356 },
        { name:'วิศวกรรมการผลิตเชิงบูรณาการ', quota:3, applicants:216, minScore:56.3574, maxScore:57.0247 },
        { name:'วิศวกรรมเกษตรอัจฉริยะ', quota:10, applicants:199, minScore:54.1351, maxScore:57.8679 },
        { name:'วิศวกรรมขนส่งทางราง', quota:10, applicants:271, minScore:56.6017, maxScore:60.2796 },
        { name:'วิศวกรรมชีวการแพทย์ (นานาชาติ)', quota:5, applicants:174, minScore:58.7718, maxScore:67.2825 },
        { name:'วิศวกรรมพลังงาน (นานาชาติ)', quota:5, applicants:93, minScore:52.5924, maxScore:56.1812 },
        { name:'วิศวกรรมแมคคาทรอนิกส์ (นานาชาติ)', quota:5, applicants:126, minScore:54.1718, maxScore:59.7521 },
        { name:'วิศวกรรมเมคคาทรอนิกส์และระบบวัดคุม', quota:10, applicants:260, minScore:59.1119, maxScore:61.6460 },
        { name:'วิศวกรรมออโตเมชัน', quota:5, applicants:118, minScore:57.8896, maxScore:58.9341 },
        { name:'วิศวกรรมไอโอทีและสารสนเทศ', quota:5, applicants:152, minScore:57.0244, maxScore:60.1722 },
        { name:'วิศวกรรมอวกาศและภูมิสารสนเทศ', quota:5, applicants:141, minScore:56.6029, maxScore:58.7791 },
        { name:'วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์ (นานาชาติ)', quota:5, applicants:83, minScore:56.4250, maxScore:60.4655 },
        { name:'วิศวกรรมอาหาร', quota:25, applicants:402, minScore:54.3792, maxScore:58.1819 },
        { name:'วิศวกรรมอิเล็กทรอนิกส์', quota:10, applicants:280, minScore:57.6565, maxScore:62.2641, highlight:true },
        { name:'วิศวกรรมเซมิคอนดักเตอร์', quota:5, applicants:223, minScore:63.2004, maxScore:65.8951, highlight:true },
        { name:'วิศวกรรมการเงิน (นานาชาติ)', quota:5, applicants:68, minScore:59.7179, maxScore:66.5895 },
        { name:'วิศวกรรมปัญญาประดิษฐ์+ผู้ประกอบการ (นานาชาติ)', quota:10, applicants:63, minScore:53.1136, maxScore:59.3276 },
        { name:'วิศวกรรมดนตรีและสื่อประสม', quota:15, applicants:56, minScore:48.0000, maxScore:54.0390, faculty:'วิทยาลัยวิศวกรรมสังคีต' },
        { name:'วิศวกรรมระบบการผลิต', quota:35, applicants:207, minScore:52.7015, maxScore:58.0900, faculty:'คณะเทคโนโลยีนวัตกรรมบูรณาการ' },
        { name:'วิศวกรรมวัสดุนาโน', quota:60, applicants:413, minScore:51.0958, maxScore:58.2689, faculty:'คณะเทคโนโลยีนวัตกรรมบูรณาการ' },
        { name:'วิศวกรรมการบินและนักบินพาณิชย์ (นานาชาติ)', quota:40, applicants:92, minScore:44.0133, maxScore:62.3037, faculty:'วิทยาลัยอุตสาหกรรมการบินนานาชาติ' },
        { name:'วิศวกรรมการบินและอวกาศ (นานาชาติ)', quota:30, applicants:147, minScore:50.4943, maxScore:59.4037, faculty:'วิทยาลัยอุตสาหกรรมการบินนานาชาติ' },
        { name:'วิศวกรรมแปรรูปอาหาร', quota:60, applicants:481, minScore:53.0418, maxScore:62.1061, faculty:'คณะอุตสาหกรรมอาหาร' },
        { name:'เทคโนโลยีคอมพิวเตอร์ (ค.อ.บ.)', quota:12, applicants:119, minScore:54.2114, maxScore:61.1424, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
        { name:'อิเล็กทรอนิกส์และโทรคมนาคม (ค.อ.บ.)', quota:23, applicants:173, minScore:51.6690, maxScore:56.2604, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี', highlight:true },
        { name:'การออกแบบสภาพแวดล้อมภายใน (ค.อ.บ. 5 ปี)', quota:18, applicants:57, minScore:52.0622, maxScore:58.0884, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
        { name:'นวัตกรรมและเทคโนโลยีการออกแบบ (ค.อ.บ.)', quota:15, applicants:83, minScore:50.6784, maxScore:56.2568, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
      ]
    },
    { id:'kmitl-cp', name:'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง', short:'สจล.', campus:'ชุมพร', color:'accent', parent:'kmitl',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:91, minScore:52.6830, maxScore:58.1075 },
        { name:'วิศวกรรมเครื่องกล', quota:40, applicants:110, minScore:42.5375, maxScore:54.8020 },
        { name:'วิศวกรรมไฟฟ้า (อิเล็กทรอนิกส์+สื่อสาร)', quota:30, applicants:66, minScore:41.6810, maxScore:57.5195 },
        { name:'วิศวกรรมไฟฟ้ากำลัง', quota:20, applicants:116, minScore:50.6220, maxScore:59.3205 },
        { name:'วิศวกรรมโยธา', quota:30, applicants:167, minScore:50.4370, maxScore:57.5035 },
        { name:'วิศวกรรมหุ่นยนต์และอิเล็กทรอนิกส์', quota:30, applicants:48, minScore:37.9785, maxScore:51.0450 },
        { name:'วิศวกรรมอุตสาหการและการผลิต', quota:30, applicants:41, minScore:42.2880, maxScore:55.4150 },
      ]
    },

    // ────────── มจธ. (บางมด) ──────────
    { id:'kmutt', name:'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี', short:'มจธ.', campus:'บางมด', color:'accent',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:319, minScore:43.9664, maxScore:64.9034, highlight:true },
        { name:'วิศวกรรมคอมพิวเตอร์ (นานาชาติ)', quota:15, applicants:98, minScore:38.8956, maxScore:49.0724 },
        { name:'วิศวกรรมไฟฟ้า', quota:15, applicants:380, minScore:45.7346, maxScore:66.5966, highlight:true },
        { name:'วิศวกรรมไฟฟ้า (ระบบไฟฟ้า อิเล็กทรอนิกส์กำลัง)', quota:6, applicants:235, minScore:44.0044, maxScore:45.5820 },
        { name:'วิศวกรรมไฟฟ้าสื่อสารและอิเล็กทรอนิกส์', quota:1, applicants:142, minScore:44.9012, maxScore:44.9012 },
        { name:'วิศวกรรมเครื่องกล', quota:29, applicants:243, minScore:42.0712, maxScore:54.7900 },
        { name:'วิศวกรรมเคมี', quota:12, applicants:338, minScore:42.8554, maxScore:64.7066 },
        { name:'วิศวกรรมเคมี (นานาชาติ)', quota:17, applicants:132, minScore:33.5266, maxScore:39.0970 },
        { name:'วิศวกรรมโยธา', quota:10, applicants:326, minScore:43.4558, maxScore:47.2898 },
        { name:'วิศวกรรมโยธา (นานาชาติ)', quota:25, applicants:141, minScore:32.5360, maxScore:45.6282 },
        { name:'วิศวกรรมอุตสาหการ', quota:20, applicants:412, minScore:40.5590, maxScore:43.8212 },
        { name:'วิศวกรรมเมคคาทรอนิกส์', quota:13, applicants:153, minScore:38.3430, maxScore:43.9576 },
        { name:'วิศวกรรมยานยนต์', quota:28, applicants:206, minScore:37.0796, maxScore:47.8180 },
        { name:'วิศวกรรมการผลิตอัจฉริยะและเครื่องมือขั้นสูง', quota:30, applicants:734, minScore:35.6726, maxScore:39.2824 },
        { name:'วิศวกรรมวัสดุ', quota:30, applicants:581, minScore:36.0326, maxScore:42.5392 },
        { name:'วิศวกรรมการผลิตชิ้นส่วนยานยนต์และอากาศยาน', quota:20, applicants:454, minScore:35.3180, maxScore:38.4608 },
        { name:'วิศวกรรมสิ่งแวดล้อม', quota:5, applicants:259, minScore:39.3338, maxScore:40.8260 },
        { name:'วิศวกรรมสิ่งแวดล้อม (อังกฤษ)', quota:35, applicants:61, minScore:21.5504, maxScore:36.7128 },
        { name:'วิศวกรรมอัตโนมัติ (นานาชาติ)', quota:27, applicants:65, minScore:25.8436, maxScore:34.2314 },
        { name:'วิศวกรรมระบบควบคุมและเครื่องมือวัด', quota:17, applicants:341, minScore:36.7932, maxScore:42.2432 },
        { name:'วิศวกรรมอิเล็กทรอนิกส์และสารสนเทศสื่อสาร (นานาชาติ)', quota:35, applicants:56, minScore:22.6902, maxScore:41.0102 },
        { name:'วิศวกรรมเซมิคอนดักเตอร์', quota:10, applicants:186, minScore:39.0206, maxScore:50.6956, highlight:true },
        { name:'วิศวกรรมระบบอุตสาหกรรมและการประกอบการธุรกิจ', quota:22, applicants:203, minScore:34.3778, maxScore:41.6110 },
        { name:'วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (FIBO)', quota:30, applicants:67, minScore:33.9648, maxScore:63.6050, highlight:true },
        { name:'วิศวกรรมระบบปัญญาประดิษฐ์ (ราชบุรี)', quota:60, applicants:44, minScore:42.4553, maxScore:71.5900, highlight:true },
        { name:'วิศวกรรมเครื่องกล (ค.อ.บ. 5 ปี)', quota:10, applicants:116, minScore:63.9612, maxScore:67.1563, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
        { name:'วิศวกรรมไฟฟ้า-วิชาโทอิเล็กทรอนิกส์อัจฉริยะ (ค.อ.บ. 5 ปี)', quota:20, applicants:81, minScore:61.4505, maxScore:65.5201, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี', highlight:true },
        { name:'วิศวกรรมไฟฟ้า-วิชาโทไฟฟ้ากำลัง (ค.อ.บ. 5 ปี)', quota:1, applicants:29, minScore:72.5390, maxScore:72.5390, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี', highlight:true },
        { name:'วิศวกรรมไฟฟ้า-วิชาโทวิศวกรรมคอมพิวเตอร์ (ค.อ.บ. 5 ปี)', quota:1, applicants:28, minScore:71.6305, maxScore:71.6305, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี', highlight:true },
        { name:'วิศวกรรมโยธา (ค.อ.บ. 5 ปี)', quota:17, applicants:146, minScore:66.6670, maxScore:77.5138, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
        { name:'วิศวกรรมอุตสาหการ (ค.อ.บ. 5 ปี)', quota:12, applicants:75, minScore:62.4360, maxScore:68.5798, faculty:'คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี' },
      ]
    },

    // ────────── มจพ. (กรุงเทพฯ) ──────────
    { id:'kmutnb', name:'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ', short:'มจพ.', campus:'กรุงเทพฯ', color:'accent',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:214, minScore:39.9665, maxScore:49.9333, highlight:true },
        { name:'วิศวกรรมไฟฟ้า (กำลัง/ควบคุมอัตโนมัติ)', quota:10, applicants:292, minScore:42.7500, maxScore:47.8000, highlight:true },
        { name:'วิศวกรรมไฟฟ้า (โทรคมนาคม)', quota:20, applicants:256, minScore:36.2333, maxScore:42.5500 },
        { name:'วิศวกรรมไฟฟ้าและระบบอัจฉริยะ (อังกฤษ)', quota:35, applicants:92, minScore:22.8665, maxScore:41.2333 },
        { name:'วิศวกรรมปัญญาประดิษฐ์และไฟฟ้าสื่อสาร (อังกฤษ)', quota:40, applicants:60, minScore:18.4665, maxScore:34.7000 },
        { name:'วิศวกรรมไฟฟ้าอุตสาหกรรมและพลังงาน', quota:15, applicants:282, minScore:51.7904, maxScore:57.6146, highlight:true },
        { name:'วิศวกรรมไฟฟ้าอุตสาหกรรมและพลังงาน (เพิ่มเติม)', quota:30, applicants:137, minScore:45.8414, maxScore:51.7197 },
        { name:'วิศวกรรมเครื่องกล', quota:25, applicants:490, minScore:43.0152, maxScore:49.4549 },
        { name:'วิศวกรรมเครื่องกลเพื่อการออกแบบฯ (นานาชาติ)', quota:25, applicants:135, minScore:31.3550, maxScore:41.3530 },
        { name:'วิศวกรรมเคมี', quota:35, applicants:417, minScore:57.8345, maxScore:63.9465, highlight:true },
        { name:'วิศวกรรมโยธา', quota:5, applicants:251, minScore:43.1732, maxScore:44.4464 },
        { name:'วิศวกรรมการผลิต', quota:30, applicants:479, minScore:35.9999, maxScore:45.3998 },
        { name:'วิศวกรรมขนถ่ายวัสดุ', quota:15, applicants:589, minScore:38.0548, maxScore:40.8380 },
        { name:'วิศวกรรมวัสดุ', quota:60, applicants:2167, minScore:55.2492, maxScore:60.7966 },
        { name:'วิศวกรรมวัสดุและการออกแบบ (นานาชาติ)', quota:30, applicants:75, minScore:35.8664, maxScore:50.4850 },
        { name:'วิศวกรรมโลจิสติกส์', quota:15, applicants:844, minScore:39.7254, maxScore:43.6262 },
        { name:'วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (อังกฤษ)', quota:30, applicants:196, minScore:33.7750, maxScore:48.3833 },
        { name:'วิศวกรรมการบินและอวกาศ', quota:25, applicants:333, minScore:41.8236, maxScore:45.2673 },
        { name:'วิศวกรรมการออกแบบการบินและอวกาศ (นานาชาติ)', quota:25, applicants:75, minScore:28.7441, maxScore:40.6516 },
        { name:'วิศวกรรมอุตสาหการ', quota:10, applicants:343, minScore:43.0676, maxScore:45.0009 },
        { name:'วิศวกรรมชีวการแพทย์', quota:40, applicants:138, minScore:28.8266, maxScore:49.5232 },
        { name:'วิศวกรรมไมโครอิเล็กทรอนิกส์และเซมิคอนดักเตอร์', quota:25, applicants:58, minScore:28.3862, maxScore:45.5842, highlight:true },
        { name:'วิศวกรรมยานยนต์ไฟฟ้า+ระบบอัตโนมัติ (นานาชาติ TGGS)', quota:14, applicants:11, minScore:46.7629, maxScore:58.0758 },
        { name:'วิศวกรรมการออกแบบไมโครอิเล็กทรอนิกส์ฯ (นานาชาติ TGGS)', quota:5, applicants:10, minScore:51.9958, maxScore:65.5945 },
        { name:'วิศวกรรมโยธาและการศึกษา (ค.อ.บ. 5 ปี)', quota:5, applicants:67, minScore:59.9385, maxScore:67.5050, faculty:'คณะครุศาสตร์อุตสาหกรรม' },
        { name:'วิศวกรรมแมคคาทรอนิกส์และหุ่นยนต์ (ค.อ.บ.)', quota:10, applicants:155, minScore:52.5895, maxScore:63.8563, faculty:'คณะครุศาสตร์อุตสาหกรรม', highlight:true },
        { name:'เทคโนโลยีคอมพิวเตอร์ (ค.อ.บ.)', quota:4, applicants:39, minScore:57.8595, maxScore:60.0388, faculty:'คณะครุศาสตร์อุตสาหกรรม' },
        { name:'วิศวกรรมเครื่องกล (ค.อ.บ. 5 ปี)', quota:10, applicants:72, minScore:55.9585, maxScore:58.7393, faculty:'คณะครุศาสตร์อุตสาหกรรม' },
        { name:'วิศวกรรมการผลิตและอุตสาหการ (ค.อ.บ.)', quota:10, applicants:107, minScore:53.5083, maxScore:60.2223, faculty:'คณะครุศาสตร์อุตสาหกรรม' },
      ]
    },
    { id:'kmutnb-pr', name:'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ', short:'มจพ.', campus:'ปราจีนบุรี', color:'accent', parent:'kmutnb',
      programs:[
        { name:'วิศวกรรมเครื่องมือวัดและอัตโนมัติ', quota:10, applicants:108, minScore:43.9215, maxScore:55.8425 },
        { name:'วิศวกรรมเกษตรและอาหาร', quota:40, applicants:24, minScore:46.1247, maxScore:47.6246 },
        { name:'วิศวกรรมสารสนเทศและเครือข่าย', quota:40, applicants:148, minScore:39.3749, maxScore:54.2782 },
        { name:'วิศวกรรมอุตสาหการ+โลจิสติกส์', quota:40, applicants:183, minScore:42.4270, maxScore:61.1090 },
      ]
    },
    { id:'kmutnb-ry', name:'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ', short:'มจพ.', campus:'ระยอง', color:'accent', parent:'kmutnb',
      programs:[
        { name:'เทคโนโลยีวิศวกรรมกระบวนเคมี', quota:15, applicants:156, minScore:36.2141, maxScore:41.6399 },
        { name:'เทคโนโลยีวิศวกรรมเครื่องกลและยานยนต์', quota:20, applicants:399, minScore:37.0866, maxScore:44.7552 },
        { name:'เทคโนโลยีวิศวกรรมไฟฟ้าและอัตโนมัติ', quota:10, applicants:131, minScore:41.1660, maxScore:48.2372 },
        { name:'เทคโนโลยีวิศวกรรมอุตสาหการและโลจิสติกส์', quota:20, applicants:238, minScore:35.8524, maxScore:42.1926 },
        { name:'เทคโนโลยีวิศวกรรมวัสดุและกระบวนการผลิต', quota:30, applicants:229, minScore:42.0912, maxScore:51.1239 },
      ]
    },

    /* ===== มหาวิทยาลัยเป้าหมายอื่นๆ ===== */

    // ────────── จุฬาฯ ──────────
    { id:'chula', name:'จุฬาลงกรณ์มหาวิทยาลัย', short:'จุฬาฯ', campus:'วิทยาเขตหลัก', color:'bad',
      programs:[
        { name:'วิศวกรรมศาสตร์ (รวมรับ)', quota:305, applicants:857, minScore:54.6525, maxScore:80.2664 },
        { name:'วิศวกรรมคอมพิวเตอร์', quota:75, applicants:279, minScore:65.9408, maxScore:87.9798, highlight:true },
        { name:'วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล', quota:90, applicants:402, minScore:61.1232, maxScore:82.2091 },
        { name:'วิศวกรรมเคมี', quota:5, applicants:115, minScore:61.0700, maxScore:77.3184 },
        { name:'วิศวกรรมนิวเคลียร์และรังสี', quota:15, applicants:150, minScore:51.8766, maxScore:64.1959 },
        { name:'วิศวกรรมไฟฟ้า', quota:15, applicants:265, minScore:71.8747, maxScore:83.1336, highlight:true },
        { name:'วิศวกรรมโยธา', quota:25, applicants:104, minScore:54.9197, maxScore:73.4092 },
        { name:'วิศวกรรมโลหการและวัสดุ', quota:30, applicants:164, minScore:49.7129, maxScore:54.7290 },
        { name:'วิศวกรรมสำรวจ', quota:32, applicants:197, minScore:51.9756, maxScore:74.2306 },
        { name:'วิศวกรรมสิ่งแวดล้อม', quota:20, applicants:147, minScore:52.0636, maxScore:60.0499 },
        { name:'วิศวกรรมทรัพยากรธรณี', quota:20, applicants:73, minScore:48.0022, maxScore:56.5116 },
        { name:'วิศวกรรมแหล่งน้ำ', quota:5, applicants:71, minScore:71.2572, maxScore:77.6515 },
        { name:'เคมีวิศวกรรม (รูปแบบที่ 1)', quota:45, applicants:467, minScore:44.1074, maxScore:55.1627, faculty:'คณะวิทยาศาสตร์' },
        { name:'เคมีวิศวกรรม (รูปแบบที่ 2)', quota:45, applicants:420, minScore:57.4542, maxScore:65.8164, faculty:'คณะวิทยาศาสตร์' },
      ]
    },

    // ────────── ธรรมศาสตร์ ──────────
    { id:'tu', name:'มหาวิทยาลัยธรรมศาสตร์', short:'มธ.', campus:'ศูนย์รังสิต', color:'neutral', region:'bkk',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:40, applicants:507, minScore:43.0666, maxScore:55.5997, highlight:true },
        { name:'วิศวกรรมเคมี', quota:70, applicants:1405, minScore:39.4664, maxScore:52.4330 },
        { name:'วิศวกรรมเครื่องกล', quota:45, applicants:945, minScore:40.1332, maxScore:45.5664 },
        { name:'วิศวกรรมไฟฟ้า', quota:55, applicants:908, minScore:42.2997, maxScore:54.9666, highlight:true },
        { name:'วิศวกรรมไฟฟ้าและการจัดการอุตสาหกรรม (พิเศษ)', quota:40, applicants:354, minScore:34.6333, maxScore:37.8999 },
        { name:'วิศวกรรมซอฟต์แวร์ (พิเศษ)', quota:27, applicants:195, minScore:36.3665, maxScore:47.2000 },
        { name:'วิศวกรรมนานาชาติ (TEP/TEPE)', quota:80, applicants:176, minScore:13.6000, maxScore:39.6229 },
        { name:'SIIT: วิศวกรรมรวม (ไฟฟ้า/โยธา/เครื่องกล/เคมี/อุตสาหการ) (นานาชาติ)', quota:120, applicants:792, minScore:27.1000, maxScore:59.5998 },
        { name:'SIIT: วิศวกรรมดิจิทัล (นานาชาติ)', quota:15, applicants:139, minScore:32.4500, maxScore:42.9499 },
        { name:'SIIT: วิศวกรรมเครื่องกล (นานาชาติ)', quota:10, applicants:127, minScore:36.1498, maxScore:51.4498 },
        { name:'SIIT: วิศวกรรมไฟฟ้า (นานาชาติ)', quota:10, applicants:124, minScore:35.4499, maxScore:40.5499 },
        { name:'SIIT: วิศวกรรมโยธา (นานาชาติ)', quota:15, applicants:114, minScore:31.5998, maxScore:45.2500 },
        { name:'วิศวกรรมยานยนต์และระบบอัตโนมัติ (ศูนย์พัทยา)', quota:40, applicants:127, minScore:26.1333, maxScore:35.5333 },
      ]
    },

    // ────────── เกษตรศาสตร์ ──────────
    { id:'ku', name:'มหาวิทยาลัยเกษตรศาสตร์', short:'มก.', campus:'บางเขน', color:'good',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:35, applicants:921, minScore:56.0631, maxScore:64.7553, highlight:true },
        { name:'วิศวกรรมเคมี', quota:65, applicants:672, minScore:39.4500, maxScore:56.2333 },
        { name:'วิศวกรรมเครื่องกล', quota:60, applicants:1338, minScore:39.2500, maxScore:63.0294 },
        { name:'วิศวกรรมไฟฟ้า', quota:55, applicants:650, minScore:45.9210, maxScore:57.4842, highlight:true },
        { name:'วิศวกรรมไฟฟ้าเครื่องกลการผลิต', quota:25, applicants:560, minScore:47.4498, maxScore:57.7896 },
        { name:'วิศวกรรมโยธา', quota:60, applicants:1333, minScore:46.3800, maxScore:54.2000 },
        { name:'วิศวกรรมสิ่งแวดล้อม', quota:15, applicants:229, minScore:42.8498, maxScore:48.0000 },
        { name:'วิศวกรรมวัสดุ (พิเศษ)', quota:5, applicants:80, minScore:33.3666, maxScore:34.3831 },
        { name:'วิศวกรรมสำรวจและสารสนเทศภูมิศาสตร์', quota:10, applicants:158, minScore:44.5000, maxScore:47.0500 },
        { name:'วิศวกรรมอุตสาหการ', quota:30, applicants:796, minScore:46.6000, maxScore:54.0000 },
      ]
    },
    { id:'ku-kps', name:'มหาวิทยาลัยเกษตรศาสตร์', short:'มก.', campus:'กำแพงแสน', color:'good', parent:'ku',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:51, applicants:333, minScore:40.2534, maxScore:49.2388 },
        { name:'วิศวกรรมเครื่องกล', quota:65, applicants:571, minScore:33.8613, maxScore:42.2300 },
        { name:'วิศวกรรมเครื่องกล-เกษตร', quota:29, applicants:65, minScore:27.3569, maxScore:40.0817 },
        { name:'วิศวกรรมโยธา-ชลประทาน', quota:20, applicants:243, minScore:51.9044, maxScore:57.9636 },
        { name:'วิศวกรรมโยธา-ชลประทาน (เพิ่มเติม)', quota:25, applicants:184, minScore:41.4664, maxScore:51.0664, faculty:'วิทยาลัยการชลประทาน' },
      ]
    },
    { id:'ku-src', name:'มหาวิทยาลัยเกษตรศาสตร์', short:'มก.', campus:'ศรีราชา', color:'good', parent:'ku',
      programs:[
        { name:'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์', quota:55, applicants:984, minScore:48.9235, maxScore:60.7784, highlight:true },
        { name:'วิศวกรรมยานยนต์', quota:36, applicants:162, minScore:39.3812, maxScore:55.9758 },
        { name:'วิศวกรรมโยธา', quota:46, applicants:671, minScore:36.9238, maxScore:42.3334 },
        { name:'วิศวกรรมหุ่นยนต์และระบบอัตโนมัติ', quota:25, applicants:136, minScore:41.3772, maxScore:58.6182 },
        { name:'วิศวกรรมต่อเรือและวิศวกรรมสมุทรศาสตร์', quota:15, applicants:191, minScore:27.9500, maxScore:32.9000, faculty:'คณะพาณิชยนาวีนานาชาติ' },
        { name:'วิศวกรรมเครื่องกลเรือ', quota:25, applicants:102, minScore:37.8112, maxScore:58.8720, faculty:'คณะพาณิชยนาวีนานาชาติ' },
      ]
    },
    { id:'ku-sn', name:'มหาวิทยาลัยเกษตรศาสตร์', short:'มก.', campus:'เฉลิมพระเกียรติ จ.สกลนคร', color:'good', parent:'ku',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:26, minScore:37.7395, maxScore:52.0152, faculty:'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์' },
        { name:'วิศวกรรมเครื่องกลและการผลิต', quota:30, applicants:169, minScore:48.0720, maxScore:61.1388, faculty:'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์' },
        { name:'วิศวกรรมไฟฟ้า', quota:20, applicants:40, minScore:33.8591, maxScore:56.1496, faculty:'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์', highlight:true },
        { name:'วิศวกรรมโยธา', quota:40, applicants:88, minScore:23.7384, maxScore:64.4508, faculty:'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์' },
        { name:'วิศวกรรมอุตสาหการ', quota:40, applicants:128, minScore:36.4008, maxScore:60.7980, faculty:'คณะวิทยาศาสตร์และวิศวกรรมศาสตร์' },
      ]
    },

    // ────────── มหิดล ──────────
    { id:'mahidol', name:'มหาวิทยาลัยมหิดล', short:'มหิดล', campus:'ศาลายา', color:'neutral', region:'bkk',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:20, applicants:374, minScore:48.0500, maxScore:62.9625, highlight:true },
        { name:'วิศวกรรมเคมี', quota:10, applicants:185, minScore:41.6248, maxScore:46.7500 },
        { name:'วิศวกรรมสิ่งแวดล้อมและการจัดการภัยพิบัติ (กาญจนบุรี)', quota:30, applicants:47, minScore:51.3165, maxScore:63.1834 },
      ]
    },

    // ────────── ศิลปากร ──────────
    { id:'silpakorn', name:'มหาวิทยาลัยศิลปากร', short:'ศศ.', campus:'สนามจันทร์', color:'neutral', region:'bkk',
      programs:[
        { name:'วิศวกรรมเคมี', quota:30, applicants:179, minScore:35.3330, maxScore:42.5000 },
        { name:'วิศวกรรมกระบวนการชีวภาพ', quota:10, applicants:0, minScore:0, maxScore:0, note:'ไม่มีผู้สมัคร' },
        { name:'วิศวกรรมวัสดุและนาโนเทคโนโลยี', quota:20, applicants:198, minScore:65.8938, maxScore:72.0192 },
        { name:'วิศวกรรมอุตสาหการ', quota:10, applicants:2, minScore:0, maxScore:0, note:'ไม่มีผู้ผ่าน' },
        { name:'เทคโนโลยีบัณฑิต สาขาธุรกิจวิศวกรรม', quota:10, applicants:232, minScore:53.5556, maxScore:74.7866 },
      ]
    },

    // ────────── เชียงใหม่ ──────────
    { id:'cmu', name:'มหาวิทยาลัยเชียงใหม่', short:'มช.', campus:'วิทยาเขตหลัก', color:'neutral', region:'reg',
      programs:[
        { name:'วิศวกรรมคอมพิวเตอร์', quota:10, applicants:238, minScore:59.2612, maxScore:65.4514, highlight:true },
        { name:'วิศวกรรมระบบสารสนเทศและความมั่นคงปลอดภัยไซเบอร์', quota:10, applicants:90, minScore:55.1100, maxScore:62.5392 },
        { name:'วิศวกรรมไฟฟ้า+เทคโนโลยีโครงข่ายไฟฟ้าอัจฉริยะ (นานาชาติ)', quota:10, applicants:57, minScore:53.4692, maxScore:60.5558, highlight:true },
        { name:'วิศวกรรมเซมิคอนดักเตอร์ (สองภาษา)', quota:10, applicants:139, minScore:56.0344, maxScore:59.7366, highlight:true },
        { name:'วิศวกรรมอุตสาหการ', quota:10, applicants:120, minScore:55.6200, maxScore:64.1142 },
        { name:'วิศวกรรมกระบวนการอาหาร', quota:14, applicants:359, minScore:51.6307, maxScore:54.0829, faculty:'คณะอุตสาหกรรมเกษตร' },
        { name:'วิศวกรรมซอฟต์แวร์ (นานาชาติ)', quota:15, applicants:177, minScore:56.1494, maxScore:61.8203, faculty:'วิทยาลัยศิลปะสื่อและเทคโนโลยี' },
      ]
    },

    // ────────── ขอนแก่น ──────────
    { id:'kku', name:'มหาวิทยาลัยขอนแก่น', short:'มข.', campus:'ขอนแก่น', color:'neutral', region:'reg',
      programs:[
        { name:'วิศวกรรมเกษตร', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดูข้อมูลใน PDF หน้า 62' },
        { name:'วิศวกรรมสื่อดิจิทัล (นานาชาติ)', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดูข้อมูลใน PDF หน้า 63' },
        { name:'วิศวกรรมรถไฟความเร็วสูง', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดูข้อมูลใน PDF หน้า 64' },
        { name:'วิศวกรรมเซมิคอนดักเตอร์', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดูข้อมูลใน PDF หน้า 65' },
      ]
    },

    // ────────── สงขลานครินทร์ ──────────
    { id:'psu', name:'มหาวิทยาลัยสงขลานครินทร์', short:'ม.อ.', campus:'หาดใหญ่', color:'neutral', region:'reg',
      programs:[
        { name:'วิศวกรรมศาสตร์ (สามัญ)', quota:30, applicants:634, minScore:58.3297, maxScore:64.4591 },
        { name:'วิศวกรรมศาสตร์ (ปวช.)', quota:20, applicants:25, minScore:59.8379, maxScore:59.8379 },
        { name:'วิศวกรรมการผลิต', quota:20, applicants:203, minScore:53.4472, maxScore:55.9684 },
        { name:'วิศวกรรมคอมพิวเตอร์', quota:5, applicants:158, minScore:62.5077, maxScore:67.6948, highlight:true },
        { name:'วิศวกรรมเคมี', quota:10, applicants:141, minScore:58.3002, maxScore:67.9482 },
        { name:'วิศวกรรมเมคาทรอนิกส์', quota:10, applicants:166, minScore:56.3506, maxScore:59.3408 },
        { name:'วิศวกรรมโยธา', quota:3, applicants:326, minScore:62.9682, maxScore:66.6488 },
        { name:'วิศวกรรมยาง (นานาชาติ)', quota:10, applicants:23, minScore:39.8333, maxScore:52.1866 },
        { name:'วิศวกรรมสิ่งแวดล้อม', quota:10, applicants:531, minScore:53.8141, maxScore:57.6778 },
        { name:'วิศวกรรมเหมืองแร่และวัสดุ', quota:10, applicants:219, minScore:53.3067, maxScore:56.0317 },
        { name:'วิศวกรรมเซมิคอนดักเตอร์', quota:20, applicants:154, minScore:52.8109, maxScore:66.2976, highlight:true },
        { name:'วิศวกรรมอุตสาหการ', quota:20, applicants:253, minScore:55.9790, maxScore:59.3756 },
        { name:'วิศวกรรมและการจัดการนวัตกรรม (นานาชาติ)', quota:10, applicants:51, minScore:43.7289, maxScore:47.8788 },
        { name:'วิศวกรรมปัญญาประดิษฐ์', quota:5, applicants:125, minScore:57.1455, maxScore:61.1523, highlight:true },
      ]
    },
    { id:'psu-pk', name:'มหาวิทยาลัยสงขลานครินทร์', short:'ม.อ.', campus:'ภูเก็ต', color:'neutral', region:'reg', parent:'psu',
      programs:[
        { name:'วิศวกรรมดิจิทัล (นานาชาติ, รูปแบบที่ 1)', quota:80, applicants:22, minScore:26.4025, maxScore:41.6840, faculty:'วิทยาลัยการคอมพิวเตอร์' },
        { name:'วิศวกรรมดิจิทัล (นานาชาติ, รูปแบบที่ 2)', quota:80, applicants:10, minScore:0, maxScore:0, faculty:'วิทยาลัยการคอมพิวเตอร์', note:'ไม่มีผู้ผ่าน' },
        { name:'วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (รูปแบบที่ 1)', quota:60, applicants:35, minScore:35.5430, maxScore:42.8435, faculty:'วิทยาลัยการคอมพิวเตอร์', highlight:true },
        { name:'วิศวกรรมปัญญาประดิษฐ์และระบบอัจฉริยะ (รูปแบบที่ 2)', quota:60, applicants:28, minScore:20.0135, maxScore:44.3360, faculty:'วิทยาลัยการคอมพิวเตอร์', highlight:true },
      ]
    },

    // ────────── สุรนารี ──────────
    { id:'sut', name:'มหาวิทยาลัยเทคโนโลยีสุรนารี', short:'มทส.', campus:'วิทยาเขตหลัก', color:'neutral', region:'reg',
      programs:[
        { name:'กลุ่มวิศวกรรมศาสตร์ (รวม 9 สาขา) — ม.6', quota:0, applicants:0, minScore:0, maxScore:0, note:'รับรวมหลายสาขา ดู PDF หน้า 297-310' },
        { name:'วิศวกรรมการผลิตอัจฉริยะ (ม.6)', quota:20, applicants:1, minScore:0, maxScore:0, note:'ไม่มีผู้ผ่าน' },
        { name:'วิศวกรรมเครื่องกลและระบบการผลิต (นอกเวลา)', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดู PDF หน้า 299' },
        { name:'วิศวกรรมเครื่องกลและอากาศยาน (นานาชาติ)', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดู PDF หน้า 300' },
        { name:'วิศวกรรมไฟฟ้าอุตสาหกรรมและปัญญาประดิษฐ์ (นอกเวลา)', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดู PDF หน้า 302' },
        { name:'วิศวกรรมเมคคาทรอนิกส์ (นอกเวลา-ปวช.)', quota:90, applicants:9, minScore:84.5000, maxScore:96.2500 },
        { name:'วิศวกรรมโยธาและโครงสร้างพื้นฐาน (นอกเวลา-ปวช.)', quota:50, applicants:13, minScore:81.0000, maxScore:95.2500 },
        { name:'วิศวกรรมธรณี (ม.6 ใช้ GPAX)', quota:20, applicants:19, minScore:90.7500, maxScore:91.7500 },
        { name:'วิศวกรรมธรณี (ม.6 ใช้ A-Level)', quota:20, applicants:1, minScore:25.0250, maxScore:25.0250 },
        { name:'วิศวกรรมอิเล็กทรอนิกส์และระบบสมองกลฝังตัว', quota:0, applicants:0, minScore:0, maxScore:0, note:'ดู PDF หน้า 308' },
      ]
    },
  ]
};