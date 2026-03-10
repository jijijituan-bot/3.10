import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

  // 主页面组件
  export default function Home() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  // The Magic of Tomorrowland 室内幻境 2025案例的状态管理
  const [showTomorrowlandGallery, setShowTomorrowlandGallery] = React.useState(false);
  const [currentTomorrowlandIndex, setCurrentTomorrowlandIndex] = React.useState(0);
  
  // 第一个案例的状态管理
  const [showImageGallery, setShowImageGallery] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  
  // 第二个案例的状态管理
  const [showGClassGallery, setShowGClassGallery] = React.useState(false);
  const [currentGClassIndex, setCurrentGClassIndex] = React.useState(0);
  
  // 第三个案例的状态管理
  const [showLolGallery, setShowLolGallery] = React.useState(false);
  const [currentLolIndex, setCurrentLolIndex] = React.useState(0);
  
  // 第四个案例的状态管理 - 2024王者荣耀年度总决赛-北京
  const [showKingGloryGallery, setShowKingGloryGallery] = React.useState(false);
  const [currentKingGloryIndex, setCurrentKingGloryIndex] = React.useState(0);
  
  // 第五个案例的状态管理 - 英菲尼迪车展
  const [showInfinitiGallery, setShowInfinitiGallery] = React.useState(false);
  const [currentInfinitiIndex, setCurrentInfinitiIndex] = React.useState(0);
  
  // 证书轮播的状态管理
  const [currentCertIndex, setCurrentCertIndex] = React.useState(0);
  
  // The Magic of Tomorrowland 室内幻境 2025图片数组
  const tomorrowlandGalleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/1_20260310095445.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2_20260310095448.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/3_20260310095451.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/4_20260310095454.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/5_20260310095457.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/6_20260310095504.png"
  ];
  
  const galleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日1_20260309164521.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日2_20260309164524.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日3_20260309164528.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日4_20260309164533.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日5_20260309164541.png"
  ];
  
  // 2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现图片数组
  const gClassGalleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现1_20260309165047.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现2_20260309165050.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现3_20260309165054.png"
  ];
  
  // 2024续梦前行英雄联盟传奇杯图片数组
  const lolGalleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯1_20260309171505.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯2_20260309171508.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯3_20260309171511.png"
  ];
  
  // 2024王者荣耀年度总决赛-北京图片数组
  const kingGloryGalleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京1_20260309172042.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京2_20260309172045.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京3_20260309172048.png"
  ];
  
  // 英菲尼迪车展图片数组
  const infinitiGalleryImages = [
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展1_20260309173935.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展2_20260309173937.png",
    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展3_20260309173940.png"
  ];
  
  // 证书数据数组
  const certificates = [
    {
      id: 'cert-1',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/环境管理体系认证证书_20260310100526.jpg",
      alt: "环境管理体系认证证书GBT24001-2016 idt ISO14001:2015",
      name: "环境管理体系认证证书GBT24001-2016 idt ISO14001:2015"
    },
    {
      id: 'cert-2',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/社会责任管理体系认证证书SA8000：2014_20260310100532.jpg",
      alt: "社会责任管理体系认证证书SA8000:2014",
      name: "社会责任管理体系认证证书SA8000:2014"
    },
    {
      id: 'cert-3',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/信息安全管理体系认证证书_20260310100537.jpg",
      alt: "信息安全管理体系认证证书GBT 22080-2016ISOIEC27001:2013",
      name: "信息安全管理体系认证证书GBT 22080-2016ISOIEC27001:2013"
    },
    {
      id: 'cert-4',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/职业健康安全管理体系认证证书_20260310100542.jpg",
      alt: "职业健康安全管理体系认证证书GBT45001-2020 idt ISO 45001:2018",
      name: "职业健康安全管理体系认证证书GBT45001-2020 idt ISO 45001:2018"
    },
    {
      id: 'cert-5',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/质量管理体系认证证书_20260310100548.jpg",
      alt: "质量管理体系认证证书GBT19001-2016 idt ISO9001:2015",
      name: "质量管理体系认证证书GBT19001-2016 idt ISO9001:2015"
    },
    {
      id: 'cert-6',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/AAA级信用等级证书_20260310100551.jpg",
      alt: "AAA级信用等级证书",
      name: "AAA级信用等级证书"
    },
    {
      id: 'cert-7',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/邓白氏认证企业 邓白氏编码421208491_20260310100555.jpg",
      alt: "邓白氏认证企业 邓白氏编码421208491",
      name: "邓白氏认证企业 邓白氏编码421208491"
    },
    {
      id: 'cert-8',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/高新技术企业证书_20260310100558.jpg",
      alt: "高新技术企业证书",
      name: "高新技术企业证书"
    },
    {
      id: 'cert-9',
      src: "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/中国展览馆协会展览工程企业资质证书一级资质_20260310100601.jpg",
      alt: "中国展览馆协会展览工程企业资质证书一级资质",
      name: "中国展览馆协会展览工程企业资质证书一级资质"
    }
  ];
  
  // 打开图片查看器 - The Magic of Tomorrowland 室内幻境 2025
  const openTomorrowlandGallery = (index: number) => {
    setCurrentTomorrowlandIndex(index);
    setShowTomorrowlandGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - The Magic of Tomorrowland 室内幻境 2025
  const closeTomorrowlandGallery = () => {
    setShowTomorrowlandGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - The Magic of Tomorrowland 室内幻境 2025
  const prevTomorrowlandImage = () => {
    setCurrentTomorrowlandIndex(prev => (prev === 0 ? tomorrowlandGalleryImages.length - 1 : prev - 1));
  };
  
  // 下一张图片 - The Magic of Tomorrowland 室内幻境 2025
  const nextTomorrowlandImage = () => {
    setCurrentTomorrowlandIndex(prev => (prev === tomorrowlandGalleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 打开图片查看器 - 第一个案例
  const openImageGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - 第一个案例
  const closeImageGallery = () => {
    setShowImageGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - 第一个案例
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  
  // 下一张图片 - 第一个案例
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 打开图片查看器 - 第二个案例
  const openGClassGallery = (index: number) => {
    setCurrentGClassIndex(index);
    setShowGClassGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - 第二个案例
  const closeGClassGallery = () => {
    setShowGClassGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - 第二个案例
  const prevGClassImage = () => {
    setCurrentGClassIndex(prev => (prev === 0 ? gClassGalleryImages.length - 1 : prev - 1));
  };
  
   // 下一张图片 - 第二个案例
  const nextGClassImage = () => {
    setCurrentGClassIndex(prev => (prev === gClassGalleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 打开图片查看器 - 第三个案例
  const openLolGallery = (index: number) => {
    setCurrentLolIndex(index);
    setShowLolGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - 第三个案例
  const closeLolGallery = () => {
    setShowLolGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - 第三个案例
  const prevLolImage = () => {
    setCurrentLolIndex(prev => (prev === 0 ? lolGalleryImages.length - 1 : prev - 1));
  };
  
  // 下一张图片 - 第三个案例
  const nextLolImage = () => {
    setCurrentLolIndex(prev => (prev === lolGalleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 打开图片查看器 - 第四个案例
  const openKingGloryGallery = (index: number) => {
    setCurrentKingGloryIndex(index);
    setShowKingGloryGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - 第四个案例
  const closeKingGloryGallery = () => {
    setShowKingGloryGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - 第四个案例
  const prevKingGloryImage = () => {
    setCurrentKingGloryIndex(prev => (prev === 0 ? kingGloryGalleryImages.length - 1 : prev - 1));
  };
  
  // 下一张图片 - 第四个案例
  const nextKingGloryImage = () => {
    setCurrentKingGloryIndex(prev => (prev === kingGloryGalleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 打开图片查看器 - 第五个案例(英菲尼迪车展)
  const openInfinitiGallery = (index: number) => {
    setCurrentInfinitiIndex(index);
    setShowInfinitiGallery(true);
    document.body.style.overflow = 'hidden'; // 防止背景滚动
  };
  
  // 关闭图片查看器 - 第五个案例(英菲尼迪车展)
  const closeInfinitiGallery = () => {
    setShowInfinitiGallery(false);
    document.body.style.overflow = ''; // 恢复背景滚动
  };
  
  // 上一张图片 - 第五个案例(英菲尼迪车展)
  const prevInfinitiImage = () => {
    setCurrentInfinitiIndex(prev => (prev === 0 ? infinitiGalleryImages.length - 1 : prev - 1));
  };
  
  // 下一张图片 - 第五个案例(英菲尼迪车展)
  const nextInfinitiImage = () => {
    setCurrentInfinitiIndex(prev => (prev === infinitiGalleryImages.length - 1 ? 0 : prev + 1));
  };
  
  // 证书轮播控制函数 - 每次切换3张
  const nextCertificate = () => {
    setCurrentCertIndex(prev => {
      const next = prev + 3;
      return next >= certificates.length ? prev : next;
    });
  };
  
  const prevCertificate = () => {
    setCurrentCertIndex(prev => {
      const previous = prev - 3;
      return previous < 0 ? 0 : previous;
    });
  };
  
  const goToCertificate = (index: number) => {
    setCurrentCertIndex(index);
  };

  // 动画变体
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* 导航栏 */}
      <header className={`sticky top-0 z-50 ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-md border-b transition-all duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
             {/* 公司 Logo */}
              <div className="flex items-center">
                <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/logo_20260309155618.png" 
                  alt="北京天平道和国际展览有限公司" 
                  className="h-10 md:h-12 w-auto"
                />
              </div>

             {/* 导航链接 - 桌面版 */}
            <nav className="hidden md:flex space-x-8">
              {['首页', '关于我们', '公司资质', '服务范围', '客户案例', '联系我们'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                    className={`text-sm font-medium transition-colors hover:text-[#D9534F] ${isDark ? 'text-gray-300 hover:text-[#E98074]' : 'text-gray-700'}`}
                 >
                   {item}
                </a>
              ))}
            </nav>

            {/* 主题切换按钮 */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDark ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-800'} transition-colors`}
              aria-label="切换主题"
            >
              {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 英雄区 */}
        <section id="首页" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C9302C]/90 to-[#D9534F]/90 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{
              backgroundImage: `url(https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=modern%20exhibition%20hall%2C%20luxury%20car%20show%2C%20professional%20lighting%2C%20elegant%20design&sign=0a3e1031a54a82572bb79988833ea05f)`
            }}
          ></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 md:py-32">
            <motion.div 
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
               <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 text-shadow-lg">
                 专业展览及活动<br />
                   <span className="text-white">一站式管理服务</span>
              </h1>
               <p className="text-xl text-white mb-8 max-w-2xl text-shadow-lg">
                北京天平道和国际展览有限公司为您提供设计、策划、统筹及管理展览及活动的全方位服务，业务覆盖全国40多个城市。
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#服务范围" 
                    className="px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
                 >
                   了解我们的服务
                </a>
                <a 
                  href="#联系我们" 
                    className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-md border border-[#E98074]/50 transition-colors"
                 >
                   联系我们
                </a>
              </div>
            </motion.div>
          </div>

          {/* 装饰元素 */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
            <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className={`fill-current ${isDark ? 'text-gray-900' : 'text-white'}`}
              ></path>
            </svg>
          </div>
        </section>

        {/* 公司简介 */}
        <section id="关于我们" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                关于我们
              </h2>
                <div className="w-20 h-1 bg-[#D9534F] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  北京天平道和国际展览有限公司为综合展览及活动管理服务供货商，主要于中国从事设计、策划、统筹及管理展览及活动，业务覆盖北京、上海、广州、天津、成都、哈尔滨、沈阳、昆明、南宁及重庆等40多个城市。
                </p>
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  在提供展览及活动管理服务的过程中，客户负责提供展览及活动场地并承担相关租赁成本。我们的展览及活动主要协助展示、推广及或销售不同国际著名汽车公司的品牌汽车。
                </p>
                <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  本集团拥有超过8年的提供展览及活动管理服务经验，我们与国际知名汽车品牌，例如兰博基尼(Lamborghini)、大众汽车(Volkswagen)及其他德国及意大利汽车品牌建立稳固关系。此外，我们也为各种推广、商业及私人活动提供服务，如：王者荣耀赛事、三国志赛事、英雄联盟传奇杯等。
                </p>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className={`absolute inset-0 rounded-xl ${isDark ? 'bg-[#D9534F]/20' : 'bg-[#FCE9E7]'} transform rotate-3`}></div>
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=exhibition%20event%20management%2C%20professional%20team%2C%20coordination&sign=ac847472648323ca91a2a015c8cdc6c2" 
                  alt="公司团队" 
                  className="relative z-10 rounded-xl w-full h-auto shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 公司资质 */}
        <section id="公司资质" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                公司资质
              </h2>
                <div className="w-20 h-1 bg-[#D9534F] mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                北京天平道和国际展览有限公司拥有行业内各项专业资质认证，确保为客户提供高质量的服务
              </p>
            </motion.div>

            {/* 资质证书轮播图 - 一次显示3张 */}
            <div className="relative">
              {/* 轮播图主体 */}
              <div className="relative overflow-hidden px-12">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  key={currentCertIndex}
                >
                  {certificates.slice(currentCertIndex, currentCertIndex + 3).map((certificate) => (
                    <motion.div
                      key={certificate.id}
                      className={`rounded-xl overflow-hidden shadow-lg ${isDark ? 'bg-gray-900' : 'bg-white'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="p-4">
                        <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 aspect-[3/4] flex items-center justify-center">
                          <img 
                            src={certificate.src} 
                            alt={certificate.alt} 
                            className="w-full h-full object-contain p-2"
                            loading="lazy"
                          />
                        </div>
                        <h3 className={`text-sm font-medium text-center ${isDark ? 'text-white' : 'text-gray-900'} leading-relaxed min-h-[3.5rem]`}>
                          {certificate.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* 左右切换按钮 */}
                {currentCertIndex > 0 && (
                  <button
                    onClick={prevCertificate}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full ${isDark ? 'bg-gray-800/90 hover:bg-gray-700' : 'bg-white/90 hover:bg-gray-100'} shadow-lg flex items-center justify-center transition-all z-10`}
                    aria-label="上一组证书"
                  >
                    <i className={`fas fa-chevron-left ${isDark ? 'text-white' : 'text-gray-900'}`}></i>
                  </button>
                )}
                
                {currentCertIndex < certificates.length - 3 && (
                  <button
                    onClick={nextCertificate}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full ${isDark ? 'bg-gray-800/90 hover:bg-gray-700' : 'bg-white/90 hover:bg-gray-100'} shadow-lg flex items-center justify-center transition-all z-10`}
                    aria-label="下一组证书"
                  >
                    <i className={`fas fa-chevron-right ${isDark ? 'text-white' : 'text-gray-900'}`}></i>
                  </button>
                )}
              </div>
              
              {/* 指示器 */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(certificates.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCertificate(index * 3)}
                    className={`transition-all ${
                      Math.floor(currentCertIndex / 3) === index
                        ? 'w-8 h-2 bg-[#D9534F]'
                        : `w-2 h-2 ${isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
                    } rounded-full`}
                    aria-label={`跳转到第${index + 1}组证书`}
                  />
                ))}
              </div>
              
              {/* 计数器 */}
              <div className={`text-center mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                第 {Math.floor(currentCertIndex / 3) + 1} 组 / 共 {Math.ceil(certificates.length / 3)} 组
              </div>
            </div>


          </div>
        </section>

        {/* 服务范围 */}
        <section id="服务范围" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                我们的服务
              </h2>
                <div className="w-20 h-1 bg-[#D9534F] mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                我们提供全方位的展览及活动管理服务，从设计到执行的每个环节都精益求精
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* 设计服务 */}
              <motion.div 
                className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${isDark ? 'bg-gray-900 hover:shadow-[#D9534F]/20' : 'bg-white hover:shadow-[#FCE9E7]'}`}
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-[#D9534F] text-white rounded-full flex items-center justify-center mb-6">
                   <i className="fas fa-paint-brush text-2xl"></i>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>设计/Design</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  根据客户的规定及或展览及活动的目的，我们的内部设计师编制度身订造的设计草案，通常以二维及或三维图像呈现，当中包括我们建议使用的建材及多媒体设备的处理及或设计和图则详情。
                </p>
              </motion.div>

              {/* 项目管理 */}
              <motion.div 
                className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${isDark ? 'bg-gray-900 hover:shadow-[#D9534F]/20' : 'bg-white hover:shadow-[#FCE9E7]'}`}
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-[#D9534F] text-white rounded-full flex items-center justify-center mb-6">
                   <i className="fas fa-project-diagram text-2xl"></i>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>项目管理/Management</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  我们以项目经理的身份承接展览及活动项目，负责展览及活动的整体规划、可行性研究及一般管理。为确保项目根据协议的时间表执行，我们定期密切监察及监控各项目的工作进度及工作质量。
                </p>
              </motion.div>

              {/* 现场监督 */}
              <motion.div 
                className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${isDark ? 'bg-gray-900 hover:shadow-[#D9534F]/20' : 'bg-white hover:shadow-[#FCE9E7]'}`}
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-[#D9534F] text-white rounded-full flex items-center justify-center mb-6">
                   <i className="fas fa-user-shield text-2xl"></i>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>现场监督/Supervision</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  我们负责现场监督供应商提供的服务及检查供应商提供的产品质量。作为监督的其中一环，我们一般指派一名场地监督监控展览或活动场地的安装及建筑工程。
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 客户案例 */}
        <section id="客户案例" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                客户案例
              </h2>
                <div className="w-20 h-1 bg-[#D9534F] mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                我们成功举办的各类展览及活动案例
              </p>
            </motion.div>

            {/* The Magic of Tomorrowland 室内幻境 2025案例 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`mb-16 p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                The Magic of Tomorrowland 室内幻境 2025
              </h3>
              
              {/* 图片合集预览 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/1_20260310095445.png",
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2_20260310095448.png",
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/3_20260310095451.png"
                ].map((imageUrl, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openTomorrowlandGallery(index)}
                  >
                    <img 
                      src={imageUrl} 
                      alt={`The Magic of Tomorrowland 室内幻境 2025 ${index + 1}`} 
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                        {index === 0 ? '点击查看全部图片' : '查看图片'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* 查看全部按钮 */}
              <div className="text-center">
                <button 
                  onClick={() => openTomorrowlandGallery(0)}
                  className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                >
                  查看全部图片
                </button>
              </div>
            </motion.div>
            
            {/* 2025梅赛德斯-奔驰品牌科技日案例 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`mb-16 p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                2025梅赛德斯-奔驰品牌科技日
              </h3>
              
              {/* 图片合集预览 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日1_20260309164521.png",
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日2_20260309164524.png",
                  "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2025梅赛德斯-奔驰品牌科技日3_20260309164528.png"
                ].map((imageUrl, index) => (
                  <motion.div
                    key={index}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openImageGallery(index)}
                  >
                    <img 
                      src={imageUrl} 
                      alt={`2025梅赛德斯-奔驰品牌科技日 ${index + 1}`} 
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                        {index === 0 ? '点击查看全部图片' : '查看图片'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* 查看全部按钮 */}
              <div className="text-center">
                <button 
                  onClick={() => openImageGallery(0)}
                  className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                >
                  查看全部图片
                </button>
              </div>
            </motion.div>
             
             {/* 2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现案例 */}
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               variants={fadeIn}
               className={`p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
             >
               <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                 2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现
               </h3>
               

               
               {/* 图片合集预览 */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                 {[
                   "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现1_20260309165047.png",
                   "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现2_20260309165050.png",
                   "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现3_20260309165054.png"
                 ].map((imageUrl, index) => (
                   <motion.div
                     key={index}
                     className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                     whileHover={{ scale: 1.02 }}
                     onClick={() => openGClassGallery(index)}
                   >
                     <img 
                       src={imageUrl} 
                       alt={`2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现 ${index + 1}`} 
                       className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                       <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                         {index === 0 ? '点击查看全部图片' : '查看图片'}
                       </span>
                     </div>
                   </motion.div>
                 ))}
               </div>
               
               {/* 查看全部按钮 */}
               <div className="text-center">
                 <button 
                   onClick={() => openGClassGallery(0)}
                   className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                 >
                   查看全部图片
                 </button>
               </div>
              </motion.div>
              
              {/* 2024续梦前行英雄联盟传奇杯案例 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className={`mt-16 p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  2024续梦前行英雄联盟传奇杯
                </h3>
                

                
                {/* 图片合集预览 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯1_20260309171505.png",
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯2_20260309171508.png",
                    "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024续梦前行英雄联盟传奇杯3_20260309171511.png"
                  ].map((imageUrl, index) => (
                    <motion.div
                      key={index}
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openLolGallery(index)}
                    >
                      <img 
                        src={imageUrl} 
                        alt={`2024续梦前行英雄联盟传奇杯 ${index + 1}`} 
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                          {index === 0 ? '点击查看全部图片' : '查看图片'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* 查看全部按钮 */}
                <div className="text-center">
                  <button 
                    onClick={() => openLolGallery(0)}
                    className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                  >
                    查看全部图片
                  </button>
                </div>
               </motion.div>
               
               {/* 2024王者荣耀年度总决赛-北京案例 */}
               <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={fadeIn}
                 className={`mt-16 p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
               >
                 <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                   2024王者荣耀年度总决赛-北京
                 </h3>
                 
<div className="mb-8"></div>
                 
                 {/* 图片合集预览 */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   {[
                     "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京1_20260309172042.png",
                     "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京2_20260309172045.png",
                     "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/2024王者荣耀年度总决赛-北京3_20260309172048.png"
                   ].map((imageUrl, index) => (
                     <motion.div
                       key={index}
                       className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                       whileHover={{ scale: 1.02 }}
                       onClick={() => openKingGloryGallery(index)}
                     >
                       <img 
                         src={imageUrl} 
                         alt={`2024王者荣耀年度总决赛-北京 ${index + 1}`} 
                         className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                         <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                           {index === 0 ? '点击查看全部图片' : '查看图片'}
                         </span>
                       </div>
                     </motion.div>
                   ))}
                 </div>
                 
                 {/* 查看全部按钮 */}
                 <div className="text-center">
                   <button 
                     onClick={() => openKingGloryGallery(0)}
                     className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                   >
                     查看全部图片
                   </button>
                 </div>
                </motion.div>
                
                {/* 英菲尼迪车展案例 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  className={`mt-16 p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    英菲尼迪车展
                  </h3>
                  

                  
                  {/* 图片合集预览 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展1_20260309173935.png",
                      "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展2_20260309173937.png",
                      "https://lf-code-agent.coze.cn/obj/x-ai-cn/289444118018/attachment/英菲尼迪车展3_20260309173940.png"
                    ].map((imageUrl, index) => (
                      <motion.div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-md cursor-pointer group relative"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => openInfinitiGallery(index)}
                      >
                        <img 
                          src={imageUrl} 
                          alt={`英菲尼迪车展 ${index + 1}`} 
                          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className={`text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${index === 0 ? 'text-xl' : ''}`}>
                            {index === 0 ? '点击查看全部图片' : '查看图片'}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* 查看全部按钮 */}
                  <div className="text-center">
                    <button 
                      onClick={() => openInfinitiGallery(0)}
                      className={`px-8 py-3 bg-[#D9534F] hover:bg-[#C9302C] text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl`}
                    >
                      查看全部图片
                    </button>
                  </div>
                </motion.div>
              </div>
           </section>
         
         {/* 2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现图片查看器模态框 */}
         {showGClassGallery && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
             onClick={closeGClassGallery}
           >
             <motion.div
               className="relative max-w-6xl max-h-[90vh] w-full"
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0.9 }}
               onClick={(e) => e.stopPropagation()}
             >
               {/* 关闭按钮 */}
               <button 
                 className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                 onClick={closeGClassGallery}
               >
                 <i className="fas fa-times"></i>
               </button>
               
               {/* 图片展示区 */}
               <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                 <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                   <motion.img 
                     key={currentGClassIndex}
                     src={gClassGalleryImages[currentGClassIndex]} 
                     alt={`2024梅赛德斯-奔驰G级越野车-上海时装周特别呈现 ${currentGClassIndex + 1}`}
                     className="max-w-full max-h-full object-contain"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.3 }}
                   />
                   
                   {/* 导航箭头 */}
                   <button 
                     className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                     onClick={(e) => {
                       e.stopPropagation();
                       prevGClassImage();
                     }}
                   >
                     <i className="fas fa-chevron-left"></i>
                   </button>
                   
                   <button 
                     className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                     onClick={(e) => {
                       e.stopPropagation();
                       nextGClassImage();
                     }}
                   >
                     <i className="fas fa-chevron-right"></i>
                   </button>
                   
                   {/* 图片计数器 */}
                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                     {currentGClassIndex + 1} / {gClassGalleryImages.length}
                   </div>
                 </div>
                 
                 {/* 缩略图导航 */}
                 <div className="py-4 px-2 overflow-x-auto">
                   <div className="flex space-x-2 min-w-max">
                     {gClassGalleryImages.map((image, index) => (
                       <div 
                         key={index} 
                         className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentGClassIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                         onClick={(e) => {
                           e.stopPropagation();
                           setCurrentGClassIndex(index);
                         }}
                       >
                         <img 
                           src={image} 
                           alt={`缩略图 ${index + 1}`} 
                           className="w-full h-full object-cover"
                         />
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
         
          {/* The Magic of Tomorrowland 室内幻境 2025图片查看器模态框 */}
          {showTomorrowlandGallery && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              onClick={closeTomorrowlandGallery}
            >
              <motion.div
                className="relative max-w-6xl max-h-[90vh] w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 关闭按钮 */}
                <button 
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                  onClick={closeTomorrowlandGallery}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                {/* 图片展示区 */}
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <motion.img 
                      key={currentTomorrowlandIndex}
                      src={tomorrowlandGalleryImages[currentTomorrowlandIndex]} 
                      alt={`The Magic of Tomorrowland 室内幻境 2025 ${currentTomorrowlandIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* 导航箭头 */}
                    <button 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevTomorrowlandImage();
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextTomorrowlandImage();
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* 图片计数器 */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                      {currentTomorrowlandIndex + 1} / {tomorrowlandGalleryImages.length}
                    </div>
                  </div>
                  
                  {/* 缩略图导航 */}
                  <div className="py-4 px-2 overflow-x-auto">
                    <div className="flex space-x-2 min-w-max">
                      {tomorrowlandGalleryImages.map((image, index) => (
                        <div 
                          key={index} 
                          className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentTomorrowlandIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentTomorrowlandIndex(index);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`缩略图 ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {/* 2024续梦前行英雄联盟传奇杯图片查看器模态框 */}
          {showLolGallery && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              onClick={closeLolGallery}
            >
              <motion.div
                className="relative max-w-6xl max-h-[90vh] w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 关闭按钮 */}
                <button 
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                  onClick={closeLolGallery}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                {/* 图片展示区 */}
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <motion.img 
                      key={currentLolIndex}
                      src={lolGalleryImages[currentLolIndex]} 
                      alt={`2024续梦前行英雄联盟传奇杯 ${currentLolIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* 导航箭头 */}
                    <button 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevLolImage();
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextLolImage();
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* 图片计数器 */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                      {currentLolIndex + 1} / {lolGalleryImages.length}
                    </div>
                  </div>
                  
                  {/* 缩略图导航 */}
                  <div className="py-4 px-2 overflow-x-auto">
                    <div className="flex space-x-2 min-w-max">
                      {lolGalleryImages.map((image, index) => (
                        <div 
                          key={index} 
                          className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentLolIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentLolIndex(index);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`缩略图 ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

        {/* 图片查看器模态框 */}
        {showImageGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeImageGallery}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button 
                className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                onClick={closeImageGallery}
              >
                <i className="fas fa-times"></i>
              </button>
              
              {/* 图片展示区 */}
              <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                  <motion.img 
                    key={currentImageIndex}
                    src={galleryImages[currentImageIndex]} 
                    alt={`2025梅赛德斯-奔驰品牌科技日 ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* 导航箭头 */}
                  <button 
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* 图片计数器 */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>
                
                {/* 缩略图导航 */}
                <div className="py-4 px-2 overflow-x-auto">
                  <div className="flex space-x-2 min-w-max">
                    {galleryImages.map((image, index) => (
                      <div 
                        key={index} 
                        className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentImageIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`缩略图 ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
         )}
         
         {/* 2024王者荣耀年度总决赛-北京图片查看器模态框 */}
         {showKingGloryGallery && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
             onClick={closeKingGloryGallery}
           >
             <motion.div
               className="relative max-w-6xl max-h-[90vh] w-full"
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0.9 }}
               onClick={(e) => e.stopPropagation()}
             >
               {/* 关闭按钮 */}
               <button 
                 className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                 onClick={closeKingGloryGallery}
               >
                 <i className="fas fa-times"></i>
               </button>
               
               {/* 图片展示区 */}
               <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                 <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                   <motion.img 
                     key={currentKingGloryIndex}
                     src={kingGloryGalleryImages[currentKingGloryIndex]} 
                     alt={`2024王者荣耀年度总决赛-北京 ${currentKingGloryIndex + 1}`}
                     className="max-w-full max-h-full object-contain"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.3 }}
                   />
                   
                   {/* 导航箭头 */}
                   <button 
                     className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                     onClick={(e) => {
                       e.stopPropagation();
                       prevKingGloryImage();
                     }}
                   >
                     <i className="fas fa-chevron-left"></i>
                   </button>
                   
                   <button 
                     className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                     onClick={(e) => {
                       e.stopPropagation();
                       nextKingGloryImage();
                     }}
                   >
                     <i className="fas fa-chevron-right"></i>
                   </button>
                   
                   {/* 图片计数器 */}
                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                     {currentKingGloryIndex + 1} / {kingGloryGalleryImages.length}
                   </div>
                 </div>
                 
                 {/* 缩略图导航 */}
                 <div className="py-4 px-2 overflow-x-auto">
                   <div className="flex space-x-2 min-w-max">
                     {kingGloryGalleryImages.map((image, index) => (
                       <div 
                         key={index} 
                         className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentKingGloryIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                         onClick={(e) => {
                           e.stopPropagation();
                           setCurrentKingGloryIndex(index);
                         }}
                       >
                         <img 
                           src={image} 
                           alt={`缩略图 ${index + 1}`} 
                           className="w-full h-full object-cover"
                         />
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
           </motion.div>
          )}
          
          {/* 英菲尼迪车展图片查看器模态框 */}
          {showInfinitiGallery && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
              onClick={closeInfinitiGallery}
            >
              <motion.div
                className="relative max-w-6xl max-h-[90vh] w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* 关闭按钮 */}
                <button 
                  className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D9534F] transition-colors"
                  onClick={closeInfinitiGallery}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                {/* 图片展示区 */}
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
                    <motion.img 
                      key={currentInfinitiIndex}
                      src={infinitiGalleryImages[currentInfinitiIndex]} 
                      alt={`英菲尼迪车展 ${currentInfinitiIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* 导航箭头 */}
                    <button 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevInfinitiImage();
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextInfinitiImage();
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* 图片计数器 */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                      {currentInfinitiIndex + 1} / {infinitiGalleryImages.length}
                    </div>
                  </div>
                  
                  {/* 缩略图导航 */}
                  <div className="py-4 px-2 overflow-x-auto">
                    <div className="flex space-x-2 min-w-max">
                      {infinitiGalleryImages.map((image, index) => (
                        <div 
                          key={index} 
                          className={`w-20 h-14 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${index === currentInfinitiIndex ? 'ring-2 ring-[#D9534F] scale-110' : 'opacity-70 hover:opacity-100'}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentInfinitiIndex(index);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`缩略图 ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

         {/* 联系我们 */}
        <section id="联系我们" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                联系我们
              </h2>
                <div className="w-20 h-1 bg-[#D9534F] mx-auto mb-6"></div>
              <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                如果您有任何疑问或需要了解更多关于我们服务的信息，请随时与我们联系
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className={`p-8 rounded-xl shadow-lg ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>联系方式</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D9534F]/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-map-marker-alt text-[#D9534F]"></i>
                      </div>
                      <div>
                        <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>地址</h4>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>中国北京市朝阳区东大桥路12号润诚中心1幢5层505室</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D9534F]/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-envelope text-[#D9534F]"></i>
                      </div>
                      <div>
                        <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>邮箱</h4>
                         <a href="mailto:dowway@dowway-exh.com" className={`${isDark ? 'text-[#E98074] hover:text-[#FCE9E7]' : 'text-[#D9534F] hover:text-[#C9302C]'} transition-colors`}>
                           dowway@dowway-exh.com
                         </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D9534F]/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-phone-alt text-[#D9534F]"></i>
                      </div>
                      <div>
                        <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>电话</h4>
                         <a href="tel:+861067880600" className={`${isDark ? 'text-[#E98074] hover:text-[#FCE9E7]' : 'text-[#D9534F] hover:text-[#C9302C]'} transition-colors`}>
                           (86-10) 6788 0600
                         </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D9534F]/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-fax text-[#D9534F]"></i>
                      </div>
                      <div>
                        <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>传真</h4>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>(86-10) 6788 0600-819</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="relative rounded-xl overflow-hidden h-[400px] shadow-xl"
              >
                {/* 可点击的地图图片，点击后链接到百度地图 */}
                 <div 
                   onClick={() => {
                     // 打开百度地图链接，定位到公司地址
                     window.open('https://api.map.baidu.com/marker?location=39.929708,116.454647&title=北京天平道和国际展览有限公司&content=北京市朝阳区东大桥路12号润诚中心1幢5层505室&output=html&src=webapp.baidu.openAPIdemo', '_blank');
                   }}
                   className="w-full h-full cursor-pointer relative"
                 >
                   <img 
                     src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=beijing%20city%20map%2C%20office%20building%2C%20location%20marker&sign=687754ce9ab14636af7ebd4b91e81ecc" 
                     alt="公司位置地图" 
                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-[#D9534F] rounded-full flex items-center justify-center animate-pulse transition-transform duration-300 hover:scale-110">
                       <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                     </div>
                   </div>
                 </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className={`py-12 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border-t`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center">
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>天平道和国际展览</h3>
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  专业的展览及活动管理服务供应商，为您提供一站式解决方案。
                </p>
              </div>
              
               <div className="flex flex-col items-center text-center">
                <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>快速链接</h4>
                <ul className="space-y-2">
                  {['关于我们', '公司资质', '服务范围', '客户案例', '联系我们'].map((item) => (
                    <li key={item}>
                      <a 
                         href={`#${item}`} 
                          className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#D9534F]'} transition-colors`}
                       >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>联系我们</h4>
                <ul className="space-y-2">
                  <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    <i className="fas fa-map-marker-alt mr-2"></i> 北京市朝阳区东大桥路12号
                  </li>
                  <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    <i className="fas fa-envelope mr-2"></i> dowway@dowway-exh.com
                  </li>
                  <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                    <i className="fas fa-phone-alt mr-2"></i> (86-10) 6788 0600
                  </li>
                </ul>
              </div>
            </div>
          
          <div className={`pt-8 mt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} flex flex-col md:flex-row justify-between items-center`}>
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} 北京天平道和国际展览有限公司. 保留所有权利.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className={`text-sm ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                隐私政策
              </a>
              <a 
                href="#" 
                className={`text-sm ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                使用条款
              </a>
              <a 
                href="#" 
                className={`text-sm ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              >
                网站地图
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}