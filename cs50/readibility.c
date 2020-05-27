#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

// int count_letters(string text);
// int count_sentences(string text);
// int count_words(string text);

int main(void)
{
    int letterCounter, wordCounter, sentenceCounter;
    string userInput = get_string("Text:");

    for (int i = 0; i < strlen(userInput); i++)
    {
        letterCounter = 0;
        wordCounter = 0;
        sentenceCounter = 0;
        if (userInput[i] >= 'a' && userInput[i] <= 'z')
        {
            letterCounter++;
        }
        else if (userInput[i] == ' ')
        {
            wordCounter++;
        }
        else if (userInput[i] == '.' || userInput[i] == '?' || userInput[i] == '!')
        {
            sentenceCounter++;
        }
    }

    printf("%i", letterCounter);
    printf("%i", wordCounter);
    printf("%i", sentenceCounter);
}

// int count_letters(string text)
// {
//     int letterCounter = 0;
//     int wordCounter = 0;
//     int sentenceCounter = 0;
//     userInput = tolower(text);
//     for (int i = 0; i < strlen(userInput); i++)
//     {
//         if (userInput[i] > 'a' && userInput[i] < 'z')
//         {
//             letterCounter++;
//         }
//         else if (userInput[i] == ' ')
//         {
//         }
//     }

//     return letterCounter;
// }

// int count_word(string text)
// {
//     int wordCounter = 0;
//     for (int i = 0; i < strlen(text); i++)
//     {
//         if (text[i] == ' ')
//         {
//             wordCounter++;
//         }
//     }

//     return wordCounter;
// }

// int sentence_counter(string text)
// {
//     int sentenceCounter = 0;
//     for (int i = 0; i < strlen(text); i++)
//     {
//         if (text[i] == '.' || text[i] == '!' || text[i] == "?")
//         {
//             sentenceCounter++;
//         }
//     }
//     return sentenceCounter;
// }