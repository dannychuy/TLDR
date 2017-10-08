#tldresume main
import base64
import os

from flask import Flask, redirect, render_template, request

app = Flask(__name__)

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

@app.errorhandler(500)
def server_error(e):
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
