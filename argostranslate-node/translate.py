# translate.py

import sys
import argostranslate.package
import argostranslate.translate

def translate_text(input_text, source_lang, target_lang):
    # Load the installed model
    installed_languages = argostranslate.translate.get_installed_languages()
    translation = None
    for language in installed_languages:
        if language.code == source_lang:
            for target in language.get_target_languages():
                if target.code == target_lang:
                    translation = target.translate(input_text)
                    break

    if translation:
        return translation
    else:
        return "Translation failed."

if __name__ == "__main__":
    # Get parameters from command-line arguments
    input_text = sys.argv[1]
    source_lang = sys.argv[2]
    target_lang = sys.argv[3]

    translated_text = translate_text(input_text, source_lang, target_lang)
    print(translated_text)
