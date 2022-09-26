		 	 	 		
# Projektsetup			
| | Version|
|---|---|
|Angular| 14.2.2
|Angular CLI| 14.1.3
|Node| 16.17.0
|Package Manager: npm|  8.19.2 
|Angular Language Service (VS Code Extension)| 14.2.0

| Package                 |        Version |
|---|---|
|@angular-devkit/architect   |    0.1402.3
|@angular-devkit/build-angular |  14.2.3
|@angular-devkit/core        |    14.2.3
|@angular-devkit/schematics    |  14.1.3
|@angular/cli            |        14.1.3
|@schematics/angular      |       14.1.3
|rxjs                  |          7.5.6
|typescript           |           4.7.4

# Zu den Einzelaufgaben

## 1. Import der CSV-Datei
Die CSV-Datei wird per HTTP-Request vom Server geholt. Alternativ kann eine lokale CSV-Datei geöffnet werden.

## 2. Tabellarische Darstellung der Daten aus der CSV-Datei
Die Tabelle als Ganzes darzustellen, führt wegen der großen Anzahl an Datensätzen zu bemerkbaren Ladezeiten und zu vergleichsweise hohem Speichergebrauch. Eine Alternative ist eine Virtualscroll-Lösung, bei der der Anschein erweckt wird, dass die gesamte Tabelle gerendert wird, in Wirklichkeit aber immer nur der gerade sichtbare Teil tatsächlich auf der Seite ist. Angular Material CDK bietet eine solche Lösung (https://material.angular.io/cdk/scrolling/overview), allerdings hätte ich dann eine feste Höhe für die Tabellenzeilen festlegen müssen. Da ich es bevorzuge, wenn der gesamte Text in einer Zeile sichtbar ist, wählte ich diese Option nicht. Eine andere Möglichkeit wäre es die Autosize-Variante zu nutzen. Diese ist aber (immer noch) nur im Experimental-CDK verfügbar, das nicht für “echte” Produkte empfohlen wird. Deshalb habe ich mich für die paginierte Tabelle entschieden.

## 3. Anlegen von neuen Datensätzen anhand des gleichen Schemas
Ein neuer Datensatz wird in der Tabelle unter einer bestehenden Zeile angelegt, indem auf den Button neben der Zeile geklickt wird.

## 4. Bearbeitung bestehender Datensätze
Einzelne Datensätze können direkt in der Tabelle bearbeitet werden. Eine Alternative zur direkten Bearbeitung der Inhalte in der Tabelle wäre gewesen, beim Klicken auf eine Zeile ein Bearbeitungsformular zu öffnen. Ich habe mich gegen diese Option entschieden, da ich in diesem Fall keinen Mehrwert sah.

## 5. Prozentuale Darstellung von Datensätzen als Chart (Balken- oder Tortendiagramm)
Zu jeder Spalte kann ein Tortendiagramm mit nebenstehender Legenden-Tabelle angezeigt werden. Wird eine Zeile in der Tabelle angeklickt, wird auch das entsprechende "Tortenstück" markiert.

## 6. Export aller Daten als CSV-Datei mit dem gleichen Schema
Die Datei kann als CSV-Datei mit frei wählbarem Dateinamen heruntergeladen werden.

# Entscheidungen

Ich habe mich dazu entschieden, die Aufgabe in Angular als reine Single-Page-Frontend-Applikation zu realisieren. Einerseits, weil ich hiermit von den genannten Möglichkeiten des Java-Fullstack die meiste Erfahrung habe. Andererseits aber auch, da es möglich ist und je mehr Arbeit an den Client ausgelagert werden kann, desto weniger wird der Server beansprucht, selbst wenn viele Menschen die Anwendung verwenden.

## Angular Router
Ich habe mich entschieden, den Angular Route zu benutzen, da der Wechsel zwischen verschiedenen Komponenten, bzw. Zuständen von Komponenten (Diagrammansicht vs. Tabellenansicht, verschiedene Seiten der Tabelle) geradezu dazu auffordert, den Zurück-Button des Browsers benutzen zu können. Es bietet den weiteren Vorteil, dass Links zu einzelnen Seiten in der Tabelle erstellt werden können.

## Angular Material
Ich habe mich für Angular Material Components für den Großteil der UI entschieden, da diese es leicht machen, einem konsistenten modernen Stil zu folgen, eine für alle Browser gleiche Optik gewährleisten und unter der gleichen MIT-Lizenz wie Angular zu verwenden sind.

## 3rd-Party Libraries
Ich hatte zunächst überlegt für das CSV-Parsen eine 3rd-Party-Library zu verwenden, aber da es sich um ein vergleichsweise simples Format handelt, entschloss ich mich dazu, die Funktion selbst zu schreiben. Für den Fall, dass die Anwendung auch sehr große CSV-Dateien verarbeiten sollte, könnte (https://www.papaparse.com/) verwendet werden, das wie Angular und Angular Material unter der MIT-License verwendbar ist. Für die vorliegende Datei genügt der selbstgeschriebene Parser jedoch.
Für das Tortendiagramm hätte sich D3.js (https://d3js.org/) angeboten, aber wäre meines Erachtens hierfür übertrieben, da dies kaum zu Code-Ersparnissen geführt hätte.

