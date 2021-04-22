import tkinter as tk
from tkinter import font
import requests

height = 500
width = 600

def test_function(entry):
    print("This is the entry:", entry)


def fotmat_response(weather):
    try:
        name = weather['name']
        desc = weather['weather'][0]['description']
        temp = weather['main']['temp']
        maxima = weather['main']['temp_max']
        minima = weather['main']['temp_min']
        minima = weather['main']['temp_min']
        country = weather['sys']['country']
        temp = (temp - 32) / 9 * 5
        temp = f'{temp:.2f}'
        maxima = (maxima - 32) / 9 * 5
        maxima = f'{maxima:.2f}'
        minima = (minima - 32) / 9 * 5
        minima = f'{minima:.2f}'
   

        final_str = f'Cidade:{name} {country} \nCondições:{desc}  \nTemperatura(°C):{temp}  \nTemperatura max(°C):{maxima}  \nTemperatura min(°C):{minima}' 
    except:
        final_str = 'Teve um poblema na busca pela informação!'
    
    return final_str

def get_weather(city):
    weather_key = # Your key
    url = 'https://api.openweathermap.org/data/2.5/weather'
    params = {'APPID': weather_key, 'q': city, 'units': 'imperial'}
    response = requests.get(url, params=params)
    weather = response.json()

    label['text'] = fotmat_response(weather)

root = tk.Tk()

canvas = tk.Canvas(root, height=height, width=width)
canvas.pack()

background_image = tk.PhotoImage(file='C:\\Users\\user\\Desktop\\time\\code\\landscape.png')
background_label = tk.Label(root, image=background_image)
background_label.place(relwidth=1, relheight=1)


frame = tk.Frame(root, bg="#99ebff", bd=5)
frame.place(relx=0.5, rely=0.1,  relwidth=0.75, relheight=0.1, anchor='n')

entry = tk.Entry(frame, font=('Courier', 14))
entry.place(relwidth=0.65, relheight=1)

button = tk.Button(frame, text="Previsão", font=('Courier', 12), command=lambda: get_weather(entry.get()))
button.place(relx=0.7, relheight=1, relwidth=0.3)

lower_frame = tk.Frame(root, bg="#99ebff", bd=10)
lower_frame.place(relx=0.5, rely=0.25,  relwidth=0.75, relheight=0.6, anchor='n')

label = tk.Label(lower_frame, font=('Courier', 14), anchor='nw', justify='left', bd=4)
label.place(relwidth=1, relheight=1)

print(tk.font.families())

root.mainloop()