// page.js
import styles from './page.module.css';
import Link from 'next/link';

export default function ProfilePage() {
  const profile = {
    name: "清水晴斗",
    occupation: "学生",
    birthPlace: "滋賀県",
    birthDate: "2005年6月22日"
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>自己紹介</h1>
      
      <div className={styles.profileSection}>
        <h2 className={styles.sectionTitle}>プロフィール</h2>
        <div className={styles.profileInfo}>
          <div className={styles.infoItem}>
            <span className={styles.label}>名前：</span>
            <span className={styles.value}>{profile.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>職種：</span>
            <span className={styles.value}>{profile.occupation}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>出身地：</span>
            <span className={styles.value}>{profile.birthPlace}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>生年月日：</span>
            <span className={styles.value}>{profile.birthDate}</span>
          </div>
        </div>
      </div>

      <div className={styles.pastSection}>
        <h1>過去</h1>
        <div className={styles.content}>
          <h2>小学</h2>
          <p>
          小学3年からサッカーを始め、４年間プレーしました。ポジションはセンターバック、右ウイングです。
          センターバックでは、最終ラインを自分が守らなければ相手に得点を許すことになりかねないのですごく責任感があるポジションでした。
          後ろから全体を見回すことのできるポジションでもあり、声かけなどを積極的に行っていました。右ウィングではセンターバックとは異なり、
          得点を狙うポジションです。特にドリブルが上手かったわけではないですが、私の武器は足の速さでした。足の速さを武器に、
          相手を置き去りにし、チームに得点のチャンスを一回でも多く作れるように頑張っていました。
          チームプレーの難しさと楽しさをサッカーを通じて学ぶことができました。
          </p>
          <h2>中学</h2>
          <p>
          中学ではサッカーではなく陸上を選びました。小学生から足の速さが武器だったので、もっと早くなりたいと思ったのがきっかけです。 
          短距離を専門にし、主に200mを走っていました。200mでは体力勝負の面もあるので、体力づくりを頑張っていました。
          中学3年では、キャプテンを務めました。男女合わせて50名の部員がいました。男女合同だったので、なかなか団結力を築くことが難しく、
          悩まされることもありましたが、キャプテンといてみんなが楽しく部活動が行えるように取り組んでいました。改めて、チームを任される責任感と、
          チームを引っ張っていく大変さを学ぶことができ、非常に充実した日々を送ることができたと思っています。
          </p>
          <h2>高校</h2>
          <p>
          高校では弓道部に入部しました。入部したきっかけは、部活動体験に行った際、先輩方の弓の弾き方、矢を放った弦音がかっこよく、
          自分もやってみたいと思ったのがきっかけです。ですが、私が通っている学校には、練習場がなく、毎日近くの道場を借りて練習を行っていました。
          道場がないという最大のデメリットを抱えていましたが、決してあきらめず練習に励みました。結果、全国大会に2度出場や、国体選手にも選ばれました。
          今までは当たり前のように練習環境がありましたが、初めて部活があるのに練習する場所がない状況を経験しました。環境が良いから試合に勝てるではなく、
          自分がどれだけ練習に取り組むかで結果が大きく変わることを部活を通じて実感しました。この部活を通じて、行動力の大切さ、諦めない大切さ、
          そして、どんな状況でも言い訳をしない、など多くのことを学びました。
          </p>
        </div>
      </div>

      <div className={styles.futureSection}>
        <h1>今後について</h1>
        <div className={styles.content}>
          <p>
          私が思い描く理想は、ドローンで人を救う活動をすることです。 近年IT化が急速に普及しています。
          それに伴い、ドローンの普及も注目され、 毎年ドローン市場が高騰してることから今後の期待と希望を持っていると考えています。<br />
          では、具体的にどういう活動をしていくのか。<br />
          私が考えるのは、全国のコンビニにドローンを設置し、警察や救急隊に通報と同時にドローンがいち早く現場に到着し、 
          状況把握および、迅速な対応につながると思っています。なお、ドローンにはAEDを搭載し、心臓マッサージが必要であれば、
          近くのAEDを取りに行かなくても、ドローンが持ってきてくれる、そういったサービスを提供し、
          一人でも多くの命を助けられるようにしたいのが私が実現したい内容です。 
          また、最近では日本で地震等の自然災害が多発しています。今後30年以内に起こるとされている 、南海トラフ地震にもこのドローンを
          活用したいと思っています。主に、迅速な状況確認及び救助者の捜索・離島や災害の影響で孤立した地域への 物流供給などを行いたいと思っています。 
          ドローンを活用することで、今まで以上に迅速な対応が可能になると考えています。
          </p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.buttonOutline}>
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}