<!-- source: 63c0d07d1a26 -->
# Zarządzanie

Jak podejmowane są decyzje, jak dokonywane są wybory i jak traktowane są konflikty interesów.

## Opiekunowie

Opiekunowie recenzują i scalają pull requesty, porządkują zgłoszenia i moderują Discussions. Opiekunowie są wymienieni w [`.github/CODEOWNERS`](.github/CODEOWNERS). Każdy może zostać opiekunem po udokumentowanym okresie rzetelnych, dobrze udokumentowanych źródłami wkładów.

## Jak akceptowane są zmiany

1. Wszystkie zmiany przechodzą przez pull request. Nikt, łącznie z opiekunami, nie wypycha zmian ocen bezpośrednio do `main`.
2. Każdy pull request musi przejść `npm test` (walidację i budowanie).
3. Co najmniej jeden opiekun zatwierdza pull request.
4. Odpowiedzi wymagają dowodów ze źródła pierwotnego: oficjalnej dokumentacji, kodu źródłowego, plików licencji, opublikowanych raportów z audytów lub powtarzalnych testów. Recenzje, wpisy na blogach i twierdzenia marketingowe bez szczegółów nie są dowodami.
5. Gdy źródła są sprzeczne, decyduje najnowsze źródło pierwotne. Jeśli nadal nie jest to jasne, odpowiedź brzmi „nieznane”.

## Zmiany kryteriów

Kryteria określają każdy wynik, więc zmiany w `criteria/` wymagają większej staranności:

- Najpierw otwórz zgłoszenie „Criteria change” lub dyskusję.
- Pull request pozostaje otwarty na publiczne komentarze przez co najmniej 7 dni.
- Wymaga zatwierdzenia przez dwóch opiekunów.
- Identyfikatorów kryteriów nigdy nie zmienia się po publikacji. Kryterium wycofuje się, usuwając je w pull requeście, który wyjaśnia powód.

## Wybory

- Każda kategoria może mieć do dwóch wyborów.
- Wybór musi mieć `pick_reason`, który wyjaśnia decyzję prostym językiem.
- Każda kategoria ma najwyżej dwa wybory, uporządkowane przez `pick: 1` i `pick: 2`.
- Wybory są redakcyjne. Są pokazywane oddzielnie i nigdy nie zmieniają wyników.
- Każdy może zakwestionować wybór w kategorii „Picks” w Discussions. Odpowiedzi na zastrzeżenia są publiczne.

## Konflikty interesów

Privacy Ratings jest utrzymywany przez zespół stojący za Forward Email. Wpisy powiązane z opiekunami to „wpisy powiązane”. Obecnie oznacza to Forward Email.

Zasady dla wpisów powiązanych:

- Każdy wpis powiązany ma pole `disclosure` wyświetlane na górze jego strony.
- Pull request, który podnosi wynik wpisu powiązanego lub czyni go wyborem, musi zawierać link do dowodów dla każdej zmienionej odpowiedzi i pozostać otwarty przez co najmniej 7 dni przed scaleniem.
- Pull request, który obniża wynik wpisu powiązanego na podstawie ważnych dowodów, jest scalany jak każdy inny.
- Opiekunowie muszą dodać ujawnienie do każdego wpisu, z którym oni lub ich pracodawca mają powiązania finansowe lub osobiste.

## Pieniądze

- Bez linków afiliacyjnych. Walidacja odrzuca adresy URL z parametrami polecającymi lub śledzącymi.
- Bez płatnych miejsc, sponsorowanych wpisów i płatnych recenzji.
- Producenci mogą zgłaszać poprawki jak wszyscy inni, z dowodami, i muszą zaznaczyć, że są producentem.

## Moderacja

Zgłoszenia, pull requesty i Discussions podlegają [Kodeksowi postępowania](CODE_OF_CONDUCT.md). Opiekunowie mogą blokować lub ukrywać komentarze obraźliwe, niezwiązane z tematem lub promocyjne.
