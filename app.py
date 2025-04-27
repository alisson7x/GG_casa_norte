from flask import Flask
from flask import render_template

app = Flask(__name__)
    
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/catalogo")
def catalogo():
    return render_template("catalogo.html")

@app.route("/carrinho")
def carrinho():
    return render_template("carrinho.html")

@app.route("/pedidos")
def pedidos():
    return render_template("pedidos.html")


if __name__ == "__main__":
    with app.app_context():
        app.run(debug=True)