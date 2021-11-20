import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://cn.bing.com/images/search?view=detailV2&ccid=VN5jjFb2&id=3B47C53EA94EBC134D0F2CEE3453E0F4618D1C52&thid=OIP.VN5jjFb2UPyD4AM9X03vKAAAAA&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.54de638c56f650fc83e0033d5f4def28%3frik%3dUhyNYfTgUzTuLA%26riu%3dhttp%253a%252f%252fscimg.jianbihuadq.com%252ftouxiang%252f202003%252f2020030915105661.jpg%26ehk%3dxc57MMdijyGCWsSaCAk3BNTfli7LMeDhzR8ov2n9zyE%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=400&expw=400&q=%e5%a4%b4%e5%83%8f&simid=607988247687034260&FORM=IRPRST&ck=7C21F03284CA4D86A772F8C6D1D2A76C&selectedIndex=0&ajaxhist=0&ajaxserp=0',
    name: '胡涛'
  },
  {
    id: 2,
    username: 'admin',
    password: 'admin',
    avatar: 'https://cn.bing.com/images/search?view=detailV2&ccid=1ye0mEco&id=63983CAF93E94ECD32517BB2D192EB399D8B6546&thid=OIP.1ye0mEco3Tj9Nm-ocRsF3wAAAA&mediaurl=https%3a%2f%2ftse1-mm.cn.bing.net%2fth%2fid%2fR-C.d727b4984728dd38fd366fa8711b05df%3frik%3dRmWLnTnrktGyew%26riu%3dhttp%253a%252f%252ffile.qqtouxiang.com%252fnvsheng%252f2019-08-02%252f05c81957a9c5b61bcc2c048c6ac524b1.jpg%26ehk%3dSOpRVKF4CjMv8I53N3Y%252fVMd2E8gZw4JE6x8Y1cB%252bjo8%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=400&expw=400&q=%e5%a4%b4%e5%83%8f&simid=608031953268322081&FORM=IRPRST&ck=7B9D12A3B43704D854EFAC8509E66DBE&selectedIndex=2&ajaxhist=0&ajaxserp=0',
    name: '何世洋'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
