// src/routes/routesConfig.ts
import Path from '../guards/RoutePaths';
// import Dashboard from '../pages/dashboard/Dashboard.tsx';
// import UserList from '../pages/UserList/UserList.tsx';
// import TransactionHistory from '../pages/TransactionHistory/TransactionHistory.tsx';
// import RewardRequests from '../pages/RewardRequest/RewardRequest.tsx';
// import RewardHistory from '../pages/RewardHistory/RewardHistory.tsx';
// import TokenListing from '../pages/TokenListing/TokenListing.tsx';
// import PushNotifications from '../pages/PushNotifications/PushNotifications.tsx';
// import BlockchainStatus from '../pages/BlockChainStatus/BlockChainStatus.tsx';
// import RoleManagement from '../pages/SubAdmin/RoleManagement.tsx';
// import Settings from '../pages/Setting/Setting.tsx';
// import UserDetail from '../pages/UserList/UserDetail.tsx';
// import RewardCriteria from '../pages/RewardCriteria/RewardCriteria.tsx';
// import NftTransactions from '../pages/NftTransactions/NftTransactions.tsx';
// import PushNotificationHistory from '../pages/PushNotifications/PushNotificationHistory.tsx';
// import SendUsers from '../pages/PushNotifications/SendUsers.tsx';
// import Preview from '../pages/PushNotifications/Preview.tsx';
// import BannerNotifications from '../pages/BannerNotifications/BannerNotifications.tsx';
// import UploadBannerPreview from '../pages/BannerNotifications/UploadBannerPreview.tsx';
// import UserAccess from '../pages/SubAdmin/UserAccess.tsx';
import SignUp from '../pages/signUp/SignUp.tsx';
// import FogetPassword from '../pages/forgotPassword/FogetPassword.tsx';

export interface RouteConfig {
  path: string;
  element: React.FC;
  module: string;
  access?: 'READ' | 'READ_WRITE';
}

export const routesConfig: RouteConfig[] = [
  { path: Path.SIGNUP, element: SignUp, module: 'SIGNUP' },
  // { path: Path.FORGOTPASSWORD, element: FogetPassword, module: 'FORGOTPASSWORD' },
  // { path: Path.HOME, element: Dashboard, module: 'DASHBOARD' },
  // { path: Path.DASHBOARD, element: Dashboard, module: 'DASHBOARD' },
  // { path: Path.USERLIST, element: UserList, module: 'USER LIST' },
  // { path: Path.USERDETAIL, element: UserDetail, module: 'USER LIST' },
  // { path: Path.TRANSACTION_HISTORY, element: TransactionHistory, module: 'TRANSACTION HISTORY' },
  // { path: Path.REWARD_REQUEST, element: RewardRequests, module: 'REWARD REQUESTS' },
  // { path: Path.REWARD_HISTORY, element: RewardHistory, module: 'REWARD HISTORY' },
  // { path: Path.REWARD_CRITERIA, element: RewardCriteria, module: 'REWARD CRITERIA' },
  // { path: Path.NFT_TRANSACTIONS, element: NftTransactions, module: 'NFT TRANSACTIONS' },
  // { path: Path.TOKEN_LISTING, element: TokenListing, module: 'TOKEN LISTING' },
  // { path: Path.PUSH_NOTIFICATIONS, element: PushNotifications, module: 'PUSH NOTIFICATION' },
  // { path: Path.PUSH_NOTIFICATIONS_HISTORY, element: PushNotificationHistory, module: 'PUSH NOTIFICATION' },
  // { path: Path.SEND_USERS, element: SendUsers, module: 'PUSH NOTIFICATION' },
  // { path: Path.NOTIFICATION_PREVIEW, element: Preview, module: 'PUSH NOTIFICATION' },
  // { path: Path.BANNER_NOTIFICATIONS, element: BannerNotifications, module: 'TOKEN MANAGEMENT' },
  // { path: Path.UPLOAD_BANNER_PREVIEW, element: UploadBannerPreview, module: 'TOKEN MANAGEMENT' },
  // { path: Path.BLOCKCHAIN_STATUS, element: BlockchainStatus, module: 'BLOCKCHAIN STATUS' },
  // { path: Path.ROLE_MANAGEMENT, element: RoleManagement, module: 'SUB ADMIN' },
  // { path: Path.USER_ACCESS, element: UserAccess, module: 'SUB ADMIN' },
  // { path: Path.SETTING, element: Settings, module: 'SETTINGS' },
];
