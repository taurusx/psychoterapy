import React from 'react'
import Airplane from './../icons/Airplane'
import Alert from './../icons/Alert'
import Aperture from './../icons/Aperture'
import Contact from './../icons/Contact'
import Contacts from './../icons/Contacts'
import DayLightning from './../icons/DayLightning'
import Earthquake from './../icons/Earthquake'
import Eye from './../icons/Eye'
import GitCompare from './../icons/GitCompare'
import HeartHalf from './../icons/HeartHalf'
import MicOff from './../icons/MicOff'
import PartlySunny from './../icons/PartlySunny'
import Pulse from './../icons/Pulse'
import Thermometer from './../icons/Thermometer'

export const disorders = {
  types: [
    {
      title: 'Depresja i obniżony nastrój',
      icon: DayLightning,
      contentHtml: () => (
        <>
          <p>
            Depresja to coraz większy problem. Jest w czołówce najczęściej
            występujących chorób na świecie według Światowej Organizacji Zdrowia
            (WHO).
          </p>
          <p>
            Depresja to stan, który pojawia się niespostrzeżenie i powoli.
            Objawy depresji: obniżony nastrój (poczucie smutku i przygnębienia),
            utrata zainteresowania działaniami, które do tej pory sprawiały
            przyjemność (zobojętnienie emocjonalne), zmniejszenie energii
            (większa męczliwość), zaburzenia snu, myśli samobójcze, problemy z
            pamięcią i koncentracją, obniżona samoocena i mała wiara w siebie,
            poczucie winy (nadmierne i zwykle nieuzasadnione), spowolnienie
            psychoruchowe (rzadziej pobudzenie), zmiany łaknienia i masy ciała
            (częstsze zmniejszenie apetytu niż zwiększenie).
          </p>
          <p>
            Depresja to nie tylko problem osób dorosłych. Coraz częściej dotyka
            także dzieci i młodzieży. U nich najczęściej pierwszym objawem jest
            łatwe irytowanie się, wpadanie w złość, wrogość oraz odgradzanie się
            od rodziny i rówieśników.
          </p>
        </>
      ),
    },
    {
      title: 'Zaburzenia lękowe',
      icon: Eye,
      contentHtml: () => (
        <>
          <p>
            Zaburzenia lękowe (dawniej: nerwice) są jednymi z najczęściej
            występujących trudności psychicznych. Szacuje się, że cierpi na nie
            od 15 do 20% populacji. Występują zarówno u dorosłych jak i dzieci.
          </p>
          <p>
            W literaturze naukowej zaburzenia lękowe stanowią obszerną grupę.
            Wyróżnia się m.in. fobie, lęk uogólniony, zaburzenia
            obsesyjno-kompulsyjne czy Zespół Stresu Pourazowego (PTSD).
          </p>
        </>
      ),
    },
    {
      title: 'Fobie',
      icon: Airplane,
      contentHtml: () => (
        <>
          <p>
            Wwyróżniamy fobie specyficzne, gdzie występuje lęk przed określonymi
            przedmiotami lub sytuacjami takimi jak np.: lot samolotem, wysokość,
            zamknięte przestrzenie, zwierzęta. Jedyną z odmian fobii jest fobia
            społeczna w której występuje bardzo silny lęk przed krytyką i oceną
            społeczną (czasami w wyniku tego może wystąpić czerwienienie się,
            drżenie rąk, nudności). W agorafobii występuje lęk przed otwarta
            przestrzenią i innymi sytuacjami w której jesteśmy narażenie na
            obecność tłumu i utrudnienie natychmiastowej ucieczki do
            bezpiecznego miejsca (zwykle domu). Często w przebiegu agorafobii
            występują napady paniki, czyli intensywne napady lęku, w których
            dominuje uczucie braku kontroli nad organizmem oraz silne objawy
            lękowe, takie jak kołatanie serca, bóle w klatce piersiowej, zawroty
            głowy, pocenie się, dolegliwości ze strony układu pokarmowego.
          </p>
        </>
      ),
    },
    {
      title: 'Lęk uogólniony',
      icon: Aperture,
      contentHtml: () => (
        <>
          <p>
            Lęk uogólniony ma charakter przewlekły i może trwać wiele miesięcy.
            Osoba doświadcza nasilonego napięcia, martwienia się o wszytko,
            trudności w koncentracji. W związku z silnym napięciem, że coś złego
            może się za chwilę wydarzyć mogą pojawiać sie bóle napięciowe głowy,
            drżenie, niemożność odprężenia się oraz wzmożona aktywność układu
            autonomicznego (zawroty głowy, pocenie się, przyspieszenie oddechu,
            bóle brzucha).
          </p>
        </>
      ),
    },
    {
      title: 'Zaburzenia obsesyjno-kompulsyjne',
      icon: GitCompare,
      contentHtml: () => (
        <>
          <p>
            U osoby z tymi zaburzeniami występują nawracające natrętne myśli,
            tzw. obsesje i czynności przymusowe (kompulsje), które mają służyć
            zmniejszeniu napięcia wywołanego przez natrętną myśl. Zachowania
            kompulsywne to powtarzające się zachowania, które mogą mieć postać
            rytuałów, należą do nich np.: mycie rąk, porządkowanie, układanie
            przedmiotów, powtarzanie określonych słów, liczenie w myślach.
          </p>
        </>
      ),
    },
    {
      title: 'Zespół Stresu Pourazowego (PTSD)',
      icon: Alert,
      contentHtml: () => (
        <>
          <p>
            Zespół ten powstaje w wyniku reakcji na skrajnie stresujące
            wydarzenie (traumę), które przekracza zdolności danej osoby do
            radzenia sobie i adaptacji. Takim wydarzeniem może być np. poważny
            wypadek, bycie świadkiem czyjejś gwałtownej śmierci, doświadczenie
            napaści. Typowe objawy PTSD obejmują epizody powtarzającego się
            przeżywania urazu na nowo w natrętnych wspomnieniach lub snach,
            którym może towarzyszyć poczucie "odrętwienia", dążenie do
            odizolowania sie od ludzi, unikanie działań i sytuacji które w
            jakkolwiek sposób przypominają traumatyczne zdarzenie.
          </p>
        </>
      ),
    },
    {
      title: 'Problemy w relacjach z innymi',
      icon: Contacts,
      contentHtml: () => (
        <>
          <p>
            Badania amerykańskich psychologów wykazały, że najważniejszym
            korelatem szczęścia są dobre relacje z innymi. Potrzebujemy innych
            ludzi, aby czuć się zadowolonym i spełnionym w życiu.
          </p>
          <p>
            Problemy w relacjach mogą mieć różne oblicza, coraz bardziej
            powszechną trudnością w obecnym świecie jest bycie blisko z drugim
            człowiekiem (może być to związane z lękiem przed porzuceniem,
            odkryciem się - "nie da się mnie lubić taką jaka jestem").
            Trudnością w relacjach może być też utrudniona komunikacja,
            konflikty, poczucie, że robie za dużo (poświęcam się) lub zarzuty
            innych, że robię za mało (myślę tylko o sobie). To tylko przykładowe
            problemy, które mogą pojawiać się w relacji z drugim człowiekiem.
          </p>
        </>
      ),
    },
    {
      title: 'Stres',
      icon: Pulse,
      contentHtml: () => (
        <>
          <p>
            Stres to reakcja organizmu na różnego rodzaju doświadczenia i
            zdarzenia, najczęściej o charakterze nieprzyjemnym. Stres może
            działać mobilizująco (eustres) lub deprymująco (dystres).
            Przedłużający się bądź wyjątkowo silny stres o charakterze
            negatywnym (demobilizujący) wpływa na pogorszenie funkcjonowania
            organizmu i zdrowia człowieka.
          </p>
        </>
      ),
    },
    {
      title: 'Zaburzenia psychosomatyczne',
      icon: Thermometer,
      contentHtml: () => (
        <>
          <p>
            Objawy przypominają zaburzenia funkcji układu lub narządu, który
            jest głównie lub wyłącznie unerwiony i kontrolowany przez układ
            nerwowy autonomiczny - tj. układ krążenia, układ pokarmowy i
            oddechowy. Objawy pobudzenia układu autonomicznego takie jak
            przyspieszone bicie serca, drżenie, pocenie się, nudności itp.
            powodują stres z powodu dyskomfortu dotyczącego przeżywania danych
            objawów, które utrudniają codzienne funkcjonowanie.
          </p>
          <p>
            Warto również wspomnieć o <strong>lęku o zdrowie</strong> - osoba
            cierpiąca na lęk o zdrowie odczuwa niepokój, ponieważ uważa, że jest
            na coś chora. Charakterystyczne jest skupianie się na ciele i stałe
            sprawdzanie za pomocą wizyt lekarskich, czy coś jej dolega. Po
            otrzymaniu informacji od lekarza następuje chwilowa ulga, ale za
            moment pojawiają się wątpliwości czy "aby na pewno lekarz miał
            rację" i lęk powraca (czasami przenosząc się na inne części ciała:
            serce mam zdrowe, ale co z bólami brzucha ?).
          </p>
        </>
      ),
    },
    {
      title: 'Problemy z emocjami',
      icon: HeartHalf,
      contentHtml: () => (
        <>
          <p>
            Wszyscy doświadczamy różnego rodzaju emocji i próbujemy sobie z nimi
            radzić. Czasami nasze trudności wynikają z tego, że nikt nam nie
            pokazał jak możemy konstruktywnie wyrażać emocje. W wyniku różnych
            doświadczeń nabywamy przekonania na temat emocji i np. jesteśmy
            przekonani, że należy je tłumić (bo wyrażanie ich jest oznaką
            słabości lub wiąże się z krytyką). Możemy też działać wręcz
            przeciwnie, w każdej sytuacji stresującej impulsywnie wyrażając
            swoje emocje. Podczas psychoterapii można pracować nad regulacją
            emocji (identyfikacja i rozumienie swoich emocji oraz rozwijanie
            przystosowawczych strategii radzenia sobie).
          </p>
        </>
      ),
    },
    {
      title: 'Niska samoocena',
      icon: MicOff,
      contentHtml: () => (
        <>
          <p>
            Osoby z niskim poczuciem własnej wartości mają zazwyczaj bardzo dużo
            negatywnych przekonań na własny temat. Przekonania te mogą obejmować
            różne obszary: pracę, inteligencję, umiejętności społeczne, wygląd
            itp. Osoba mająca niską samoocenę jest nadmiernie krytyczna i
            wymagająca wobec siebie, ma tendencję do uogólniania: „Jestem do
            niczego”, „Nic nie potrafię”, „Jestem beznadziejny” itp. Często
            porównuje się do innych i uzależnia swoją wartość od ich oceny.
            Poczucie małej wartości tkwi głęboko w człowieku i potrafi
            zniekształcić związki i relacje międzyludzkie. Niska wiara w siebie
            sprawia, że człowiek rezygnuje z podejmowania różnych zadań
            niedoceniając swoich umiejętności. Poczucie małej wartości wpływa na
            obniżenie jakości życia.
          </p>
        </>
      ),
    },
    {
      title: 'Zaburzenia osobowości',
      icon: Contact,
      contentHtml: () => (
        <>
          <p>
            Zaburzenia osobowości to utrwalone wzorce postępowania, nawiązywania
            relacji oraz funkcjonowania w społeczeństwie. Wzorce te utrudniają
            jednostce życie rodzinne, społeczne i zawodowe.
          </p>
          <p>
            Wzorzec funkcjonowania danej osoby jest zależny od rodzaju
            zaburzenia osobowości, przykładowe cechy to: wrażliwość na krytykę,
            strach przed odrzuceniem, skrupulatność, koncentracja na wyglądzie,
            zaniedbywanie swoich potrzeb na rzecz innych, impulsywność dlatego
            stają się problematyczne dla danej osoby i jej otoczenia.
            Charakterystyczne dla zaburzeń osobowości jest to, że sposób
            przeżywania emocji, zachowania, funkcjonowania i nawiązywania
            relacji jest zawsze bardzo podobny, a co za tym idzie często
            nieadekwatny do sytuacji.
          </p>
          <p>
            Wzorce osobowościowe są podatne na zmianę pod wpływem adekwatnej
            psychoterapii.
          </p>
        </>
      ),
    },
  ],
}
