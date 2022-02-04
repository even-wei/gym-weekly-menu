import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const moves: { [key:string]: string[]; } = {
    '核心（腹部）': ['四足跪姿髖伸展', '對側前伸', '站姿的劈砍', '直線單跪姿劈砍', '弓箭步姿勢的劈砍'],
    '上肢推（腹部/肩部）': ['半起身', '起身', '弓箭步姿勢的舉起', '單跪姿的輪替壺鈴肩推', '高分腿的壺鈴肩推'],
    '上肢拉（背肌）': ['貓牛式', '彈力帶Ｔ字母動作', '懸吊訓練器的反向划船', '啞鈴划船', '反手引體向上'],
    '下肢推（前大腿）': ['徒手深蹲', '高腳杯深蹲', '弓步', '分腿蹲', '後腳抬高蹲'],
    '下肢拉（後大腿）': ['雙腳橋式', '單腳橋式或庫克提髖動作', '雙腳交替上抬的橋式', '手交叉前伸的單腳直膝硬舉', '手前伸的單腳直膝硬舉'],
    '全身（功能性）': ['站立的胸前擲球', '站立的過頂擲球', '單腳的面朝前轉體擲球', '跨步的胸前擲球', '跨步的站立過頂擲球'],
    };
  const cards = Object.keys(moves).map((category: string) => {
    const items = moves[category].map((item: string) => (
      <IonItem href="#" className="ion-activated">
        <IonIcon icon={walk} slot="start" />
        <IonLabel>{item}</IonLabel>
      </IonItem>
    ));
    return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{category}</IonCardTitle>
      </IonCardHeader>
      {items}
    </IonCard>
  )});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>本週菜單</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {cards}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
