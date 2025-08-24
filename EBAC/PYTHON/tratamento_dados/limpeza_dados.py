import pandas as pd

df = pd.read_csv('tratamento_dados/clientes.csv')

pd.set_option('display.width', None)

df.drop(labels='pais', axis=1, inplace=True) #coluna
df.drop(labels=2, axis=0, inplace=True) #linha

df['nome'] = df['nome'].str.title()
df['endereco'] = df['endereco'].str.lower()
df['estado'] = df['estado'].str.strip().str.upper()
df['idade'] = df['idade'].astype(int)

#exemplos
df_fillna = df.fillna(0) #substitui valor nulo por 0
df_dropna = df.dropna() #esclui valores nulos
df_dropna4 = df.dropna(thresh=4) # manter o registro com no minimo 4 valores não nulos
df = df.dropna(subset=['cpf']) #remove registros com cpf nulo

df.fillna(value={'estado': 'Desconhecido'}, inplace=True)
df['endereco'] = df['endereco'].fillna('Endereço não informado')
df['idade_corrigida'] = df['idade'].fillna(df['idade'].mean())

#tratar formato de data
df['data_corrigida'] = pd.to_datetime(df['data'], format='%d/%m/%Y', errors='coerce')

df.drop_duplicates()
df['data'] = df['data_corrigida']
df['idade'] = df['idade_corrigida']

df_salvar = df[['nome','cpf', 'idade', 'data','endereco', 'estado']]
df_salvar.to_csv('tratamento_dados/clientes_limpeza.csv', index=False)

print('Novo dataFrame: \n', pd.read_csv('tratamento_dados/clientes_limpeza.csv'))