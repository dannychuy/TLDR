#tldresume
import base64
import os

from flask import Flask, redirect, render_template, request

@app.route('/')
def homepage():
    return render_template("index.html", entities=None)

@app.route('/tldr', methods=["GET", "POST"])
def tldr():
    from google.cloud import language
    client = language.LanguageServiceClient()

    res = request.form['doc'] # this depends on what the name of type/file
                              # that danny put in the code
    document = language.types.Document(content=res, type=PLAIN_TEXT)

    response = client.analyze_entities(
        document=document,
        encoding_type="UTF32"
    )

    entities = response.entities

    return render_template("index.html", entities=entities)


@app.route('/contact')
def contact():
    return render_template("contact.html")
