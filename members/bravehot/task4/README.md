## 手摸手之 task4

### 创建 Next 项目
`npx create-next-app@latest`

### 集成 WallectConnect

#### 选择 Ethereum Libraries
官方文档很详细了，WallectConnect 默认支持 Wagmi、Ether、Solana，可根据个人喜好选择对应的 Ethereum 库

[Next 集成 WallectConnect](https://docs.walletconnect.com/appkit/next/core/installation)

#### 获取 projectId
进入 [cloud.walletconnect.com](https://cloud.walletconnect.com/) 创建一个项目，得到 projectId

根目录下创建 .env 文件

`NEXT_PUBLIC_PROJECT_ID={projectId}`

