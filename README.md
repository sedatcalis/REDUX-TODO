#  State Yönetimi 

- State:  uygulamamdaki bileşenlerimizin sahip oldu  bilgi ve özelliklerdir

- Prop Drilling : bileşenlerin yukarıdan aşagıya veri taşıması

- Context api: uygulamadaki  state'i oluşturdugumuz merkezlerden yönettigimiz state aracıdır

- Redux:  Bileşenlerin sahip oldugu ve merkezi olarak tutulması
gereken state'leri yöneten merkezi yönetim aracı

# Neden Redux
- Kodları tekrarını önler
- Performansı arttırır
- Bileşen içerisindeki karışıklıgı azaltır
- Hata ayıklama daha kolaydır
- Orta ve büyük ölcekli uygulamalarda state yönetimi kolaylaştırır

# eksi yanı

- kücük ölcekli uygulamalarda state yönetimi için biraz aşırı bir çözüm olur
muadillerine göre daha fazla kod kalabalıgına nede olur

# Redux ile ilgili bilinmesi gerekenler

1. store: uygulamının bütün bileşenleri tarafından erişebilen ve yönetebilen state deposudur.

2. reducer: aksıyondan aldıgı talimata göre store da tuttugumuz state'in nasıl değicegine karar veren yapı

3. action: store'u güncellemek için reducer'a gönderdigimiz emir/haber

- - actıon iki değere sahip olur objedir.
- - type (zorunlu) actıon görevini tamamlayan string: ("TODO_EKLE")
- - paylaod (duruma göre ) gönderilen elemanın verisi: {id:1,title:"merhaba"}

4. Dispatch: action'un gerçekleştigini reducer haber veren method

5. Subscribe: Bileşenlerin store'da tuttulan verilere erişimini
saglama (useContext | useSelector)

6. Provider: Store'da tutulan verileri uygulama saglar.

# redux kullanmak için aşamalar

- `redux` `react-redux` paketlerini indir
- reducer / reducer'ların kurulumunu yap
- store'un kurulumu yap
- store 'u projeye  tanıt

# Altın Kural 
- Verilerin api'dan geldigi ve state'yönetimi redux'ın kullanıldııgı projelerde
- store'u güncelleme işlemini api istegine bagımlı hale getirmeliyiz
- ancak istek başarılı olursa değişimi gercekleşmeli

# olası Hatalar
- degişiklik yapıyorum ama sayfayı yenilemeden gelmiyor
- - api'de sıkıntı yok
- - store'da hata var 

- - degişiklik yapıyorum sayfayı yenileyince gidiyor
- - api'da hata var
- - store'da sıkıntı yok


