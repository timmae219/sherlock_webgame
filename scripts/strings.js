// Hier kommen die ganzen hardgecodeten sowie dynamischen Texte rein 

const introText1 = "Im Dorf hat es einen Mordfall gegeben.";
const introText2 = "Du als Detektiv hast die Aufgabe, diesen Fall zu lösen.";
const introText3 = "Befrage die Menschen im Dorf um Hinweise zum Verdächtigen zu bekommen.";
const introText4 = "Aber Vorsicht! Stecke nicht die falsche Person in den Knast!";


const intro_rätsel_1 = "Was?! Ich soll dir helfen? Pff, ich habe selbst ein Rätsel zu lösen. Aber falls du mir bei meinem hilfst, so sage ich dir, was ich weiß.";
const rätsel_1 = "Also es war so: Beim jährlichen Wagenrennen sind nur 4 Wagen ins Ziel gekommen: der blaue, der grüne, der rote und der weiße. Ich lag mit Schnupfen im Bett liegt und habe mich bei meinem Kumpel nach dem Ausgang des Rennens erkundigt. Doch er kannte nur Gerüchte: 1. Der blaue sei Vierter geworden. 2. Der grüne sei Erster geworden. 3. Der rote sei nicht Vierter geworden. 4. Der weiße sei weder Erster noch Vierter geworden. Von diesen Gerüchten sind drei wahr und eines ist falsch, das weiß ich. Nun muss ich herausfinden, welcher Wagen Erster und welcher Vierter geworden ist.";
const rätsel_1_Möglichkeiten = "(A) der grüne und der blaue. (B) der grüne und der rote. (C) der weiße und der blaue. (D) der grüne und der weiße. (E) der rote und der blaue.";
const rätsel_1_Lösung = "E";
const rätsel_1_Antwort = "Wow, ja super. Genau das ist die Lösung! Vielen Dank. Ich meine mich zu erinnern, dass ich eine Person mit + gesehen habe.";
const rätsel_1_falsch = "Ich glaube nicht, dass das stimmt. Ach du bist mir doch keine Hilfe! Geh jetzt und lass mich in Ruhe nachdenken!";

const intro_rätsel_2 = "Guten Tag, kommen Sie rein. Achso Sie wollen wissen, was ich über den Mord weiß? Hmm. Na gut ich werde erzählen was ich gesehen habe. Aber dazu müssen Sie zuerst mein Rätsel lösen. Meine Arbeitskollegen und ich lieben ja Rätsel.";
const rätsel_2 = "Also es lautet wie folgt: Meine 3 Kollegen, Olaf, Ralf, Torsten und ich arbeiten alle als Handwerker in einer Firma. Wir verbringen unsere Pause am runden Frühstückstisch. Einer von uns ist Fliesenleger, einer Klempner, einer Maler und einer Elektriker. Der Klempner sitzt links neben Olaf, der Fliesenleger gegenüber von Torsten. Ralf und ich sitzen nebeneinander. Links neben dem Maler sitze ich oder Olaf. Welches Handwerk betreibe ich?";
const rätsel_2_Möglichkeiten = "(A) Fliesenleger (B) Klempner (C) Maler (D) Elektriker (E) Das ist nicht eindeutig bestimmt";
const rätsel_2_Lösung = "A";
const rätsel_2_Antwort = "Sehr gut. Da bin ich ja echt baff wie`n Aff`! Dann bin ich wohl dran. Also in jener Nacht habe ich eine + Person gesehen.";
const rätsel_2_falsch = "Leider falsch. Es tut mir Leid, aber ich kann nur einem wahren Rätselmeister helfen.";

const intro_rätsel_3 = "Ja klar, komm einfach in mein Haus rein! Was?! Ich soll dir helfen den Mörder zu schnappen? Ok, doch nur wenn du mir zuerst hilfst. Mein Sohn hat eine Matheaufgabe, die er und ich nicht verstehen. Wenn du die Aufgaben lösen kannst, bin ich gerne bereit dir alles zu erzählen, was ich weiß.";
const rätsel_3 = "Nun gut die Aufgabe lautet wie folgt: Es ist 16 % von 25 dasselbe wie...";
const rätsel_3_Möglichkeiten = "(A) 25 % von 16. (B) 18 % von 20. (C) 15 % von 26. (D) 10 % von 30. (E) 36 % von 12";
const rätsel_3_Lösung = "A";
const rätsel_3_Antwort = "Ja super, das ist ja ein praktischer Trick für die Prozentrechnung. Ich habe am Tag der Tat eine/n + gesehen.";
const rätsel_3_falsch = "Nein, das kann nicht stimmen. Du kannst wohl auch kein Mathematik. Lass uns nun in Ruhe, wir haben selber genug Probleme hier.";

const intro_rätsel_4 = "Moin moin Gefährte, tritt ein. So, du willst den Mörder hinter Schwedische Gardinen bringen? Gut gut, ich helfe gern. Doch beantworte mir zuerst diese kleine Frage."
const rätsel_4 = "Welcher der 4 Zwerge, Dwarf, Knarf, Raawf oder Drowf hat das geimeinsam gefundenen Gold gestohlen? Dwarf sagt: 'Knarf war es.', Knarf sagt: 'Drowf war es', Raawf sagt: 'Ich war es nicht' und Drowf sagt: 'Knarf lügt'. Einer der vier Zwerge lügt. Wer war es?";
const rätsel_4_Möglichkeiten = "(A) Dwarf, (B) Knarf, (C) Raawf, (D) Drowf";
const rätsel_4_Lösung = "B";
const rätsel_4_Antwort = "Wunderbar, das ist goldrichtig! Nun bin ich an der Reihe. Ich meine eine Person mit + gesehen zu haben.";
const rätsel_4_falsch = "Oh nein, das ist leider falsch. Gut, dass du keiner der Zwerge bist. Nun ja, ohne Gold auch kein Hinweis, tut mir Leid."; 

const intro_rätsel_5 = "Ach hallöchen. Wie? Ich kann dir helfen den Mörder zu schnappen? Cool. Aber bevor ich dir helfen, musst du zuerst mein super krass schwieriges Rätsel lösen.";
const rätsel_5 = "Und zwar lauetet es folgendermaßen: Ich wurde an einem Donnerstag geboren, in einem Monat mit genau 4 Donnerstagen. Der Monat darauf hatte genau 5 Freitage, 5 Samstage und 5 Sonntage. Was muss für den Monat nach diesem auf jeden Fall gelten?";
const rätsel_5_Möglichkeiten = "(A) genau 4 Dienstage, (B) genau 4 Mittwoche, (C) 5 Donnerstage, (D) 5 Freitage, (E) 5 Samstage";
const rätsel_5_Lösung = "B";
const rätsel_5_Antwort = "Du hast vollkommen recht, das stimmt. Nun bin ich gerne bereit dir alles zu sagen, was ich weiß. Ich habe eine + Person gesehen.";
const rätsel_5_falsch = "Naja, also das mit den Wochen und Monaten musst du wohl nochmal üben.";

const intro_rätsel_6 = "Hallo Fremder, wie gehts wie stehts? Wow, ich kann also bei dem Mordfall helfen? Ich habe tatsächlich etaws gesehen,a ber bevor ich dir sage, was ich weiß, musst du beweisen, dass du auch echt ein Guter bist. Dazu musst du nur dieses einfache Rätsel lösen.";
const rätsel_6 = "Also: Anna, Ben und ich haben zusammen 30 Kaugummis. Gäbe Ben mir 5, ich Anna 4 und Anna Ben 2 Kaugummis, so hätten wir alle gleich viele. Wie viele Kaugummis hat Anna?";
const rätsel_6_Möglichkeiten = "(A) 11, (B) 12, (C) 8, (D) 13, (E) 9";
const rätsel_6_Lösung = "C";
const rätsel_6_Antwort = "Ganz genau, so ist es. Also schön, ich sage dir alles, was ich weiß. Ich meine mich zu erinnern, dass ich eine Person mit + gesehen habe.";
const rätsel_6_falsch = "Na das stimmt nicht. Dabei ist es doch sooo einfach. Wenn dich das schon überfordert, so bringt dir mein Hinweis eh nichts.";

const intro_rätsel_7 = "Moin servus moin. Komm rein, setz dich und machs dir bequem. Ach ja, du bist wegen des Mordfalls hier. Puh, ich kann mich nur noch ganz dunkel an was erinnern. Ich habs nicht mehr so mit dem Gedächtnis. Du könntest meinem Gedächtnis ja auf die Sprünge helfen, wenn du mir folgendes beantwortest. Ich komme einfach nicht mehr drauf.";
const rätsel_7 = "Also: Ich war letztens mit meinen Freunden Jim, John, Justus und Jens am See. Dort sind wir nacheinander ins kühle Nass gesprungen. Ich weiß noch folgendes: Ich bin nach Jim gesprungen. Jens hüpfte vor mir hinein, und zwar unmittelbar nach John. John war vor Jim im Wasser, ist aber nicht als Erster hineingesprungen. Nun wüsste ich gerne als wie vielter sprang Justus?";
const rätsel_7_Möglichkeiten = "(A) als Erster, (B) als Zweiter, (C) als Dritter, (D) als Vierter, (E) als Letzter";
const rätsel_7_Lösung = "A";
const rätsel_7_Antwort = "Ja stimmt, genauso war es. Vielen Dank. Also ich habe an jenem Tag eine Person mit + gesehen.";
const rätsel_7_falsch = "Nein, nein. Das glaube ich nicht. Ach, ich erinnere mich an nichts mehr. Ich kann dir leider nicht helfen.";

const intro_rätsel_8 = "Hey hallo. Man nennt mich das Mathe-Genie hier im Dorf. Ich helfe dir gerne, doch zuerst musst du dich als würdig erweisen. Löse diese Matheaufgabe und ich sage dir, was ich weiß.";
const rätsel_8 = "Und wazr geht die Aufgabe so: Jedes von 5 Kinder wählt eine Zahlen 1,2 oder 4. Dann multiplizieren die Fünf ihre 5 Zahlen. Von den folgenden Zahlen kann nur eine das Produkt sein, welche?";
const rätsel_8_Möglichkeiten = "(A) 100, (B) 256, (C) 768, (D) 2048, (E) 4096";
const rätsel_8_Lösung = "B";
const rätsel_8_Antwort = "Oha, das ist richtig. Du bist wohl auch ein Mathe-Genie. Nun gut, ich erzähle dir alles. Ich habe eine + Person gesehen.";
const rätsel_8_falsch = "Ach du dicke Nuss! Das muss man doch wissen. Also dir sage ich bestimmt nichts.";

const intro_pig = "Guten Tag. Was, wie bitte? Ach ich soll erzählen, was ich über den Mord weiß? Gerne, gerne. Doch mein kleines Schweinchen ist gerade ausgebüchst. Kannst du es für mich einfangen? Dann erzähle ich dir alles.";
const pig_catch = "Wunderbar, vielen lieben Dank. Jetzt ist meine kleine Wutz wieder da, wo sie hingehört. Also ich habe an dem Tag der Tragödie eine Person mit + gesehen.";
const pig_fail = "Oh nein. Mein Schweinchen ist wohl für immer weg.";

const intro_hut_1 = "Hehe, komm ruhig näher. Die Leute sagen, ich sei ein Gauner und Betrüger. Ich verpfeife keinen Verbrecherkollegen. Falls du jedoch mein Hütchenspiel gewinnst, bin ich vielleicht gewillt dir doch etwas zu sagen. Jedoch muss ich dir sagen, dass noch niemand mein Spiel gewonnen hat, muhahahahahaha.";
const hut_1_win_1 = "Glückstreffer!";
const hut_1_win_2 = "Na schön, jetzt mache ich ernst!";
const hut_1_win_3 = "Ahhh grrh. Das hat noch niemand geschafft. Du musst mich betrogen haben! Aber nun gut, versprochen ist versprochen. Ich habe eine Person mit + gesehen";
const hut_1_fail = "Hahahaha, ich sagte es doch. NIEMAND gewinnt mein Spiel.";

const intro_hut_2 = "Hey! Komm her, ich will dir was zeigen. Achso ich soll dir was erzählen? Na gut, aber nur wenn wir eine kleine Runde spielen und du gewinnst.";
const hut_2_win_1 = "Wow, nicht schlecht Herr Specht.";
const hut_2_win_2 = "Du scheinst das schon häufiger gespielt zu haben.";
const hut_2_win_3 = "Donnerlittchen! Das war eine beeindruckende Leistung. Ich erzähle dir nun alles. Ich meine, dass der Mord von einer Person mit + verübt wurde.";
const hut_2_fail = "Kein Glück im Spiel, aber vielleicht ja in der Liebe. Tja, so läufts nun mal beim Glücksspiel. Mal gewinnt man und mal verliert man.";

const intro_shoot_1 = "Howdy! Ja klar helfe ich dir, doch zuerst muss du zeigen, wie gut du mit dem Gewehr umgehen kannst.";
const shoot_1_win = "Respekt, Meister. Das war ja brutal. Also gut ich sage, was ich weiß. Ich habe ein Person mit + gesehen.";
const shoot_1_fail = "Hast du etwa einen Knick in der Optik? Das geht aber besser. Einem so schlechten Schützen kann ich leider nicht erzählen."; 

const intro_shoot_2 = "Grüß Gott! Ich bin der bester Schütze weit und breit. Zeige mir dein Talent und ich plaudere ein bisschen aus dem Nähkästchen über den Mord.";
const shoot_2_win = "Wow! Das hätte ich nicht erwartet. Nun gut, ich spreche. Ich habe eine Person mit + gesehen.";
const shoot_2_fail = "Naja, ich schlage vor du übst noch ein bisschen.";

const intro_bird = "Grüß dich! Wie? Ich soll dir was über den Mord erzählen? Klar gerne, doch bitte fang zuerst meinen Hansi ein. Er ist schon wieder aus dem Käfig ausgebrochen.";
const bird_win = "Klasse du hast ihn. Vielen Dank. Also, ich habe eine Person mit + gesehen.";
const bird_fail = "Er ist wirklich nicht leicht zu fangen, oder? Nun ja dann muss ich es wohl wieder selber machen. Ich habe jetzt keine Zeit für dich";

export  {introText1, introText2, introText3, introText4,
        intro_rätsel_1,rätsel_1,rätsel_1_Möglichkeiten,rätsel_1_Lösung,rätsel_1_Antwort, rätsel_1_falsch,
        intro_rätsel_2,rätsel_2,rätsel_2_Möglichkeiten,rätsel_2_Lösung,rätsel_2_Antwort, rätsel_2_falsch,
        intro_rätsel_3,rätsel_3,rätsel_3_Möglichkeiten,rätsel_3_Lösung,rätsel_3_Antwort, rätsel_3_falsch,
        intro_rätsel_4,rätsel_4,rätsel_4_Möglichkeiten,rätsel_4_Lösung,rätsel_4_Antwort, rätsel_4_falsch,
        intro_rätsel_5,rätsel_5,rätsel_5_Möglichkeiten,rätsel_5_Lösung,rätsel_5_Antwort, rätsel_5_falsch,
        intro_rätsel_6,rätsel_6,rätsel_6_Möglichkeiten,rätsel_6_Lösung,rätsel_6_Antwort, rätsel_6_falsch,
        intro_rätsel_7,rätsel_7,rätsel_7_Möglichkeiten,rätsel_7_Lösung,rätsel_7_Antwort, rätsel_7_falsch,
        intro_rätsel_8,rätsel_8,rätsel_8_Möglichkeiten,rätsel_8_Lösung,rätsel_8_Antwort, rätsel_8_falsch,
        intro_pig, pig_catch, pig_fail,
        intro_hut_1, hut_1_win_1, hut_1_win_2, hut_1_win_3, hut_1_fail,
        intro_hut_2, hut_2_win_1, hut_2_win_2, hut_2_win_3, hut_2_fail,
        intro_shoot_1, shoot_1_win, shoot_1_fail,
        intro_shoot_2, shoot_2_win, shoot_2_fail,
        intro_bird, bird_win, bird_fail};