# `ionoscloud_container_registry_token`

Refer to the Terraform Registory for docs: [`ionoscloud_container_registry_token`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token).

# `containerRegistryToken` Submodule <a name="`containerRegistryToken` Submodule" id="@cdktf/provider-ionoscloud.containerRegistryToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryToken <a name="ContainerRegistryToken" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token ionoscloud_container_registry_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryToken;

ContainerRegistryToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .registryId(java.lang.String)
//  .expiryDate(java.lang.String)
//  .id(java.lang.String)
//  .savePasswordToFile(java.lang.String)
//  .scopes(IResolvable)
//  .scopes(java.util.List<ContainerRegistryTokenScopes>)
//  .status(java.lang.String)
//  .timeouts(ContainerRegistryTokenTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#id ContainerRegistryToken#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.savePasswordToFile">savePasswordToFile</a></code> | <code>java.lang.String</code> | Saves password to file. Only works on create. Takes as argument a file name, or a file path. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scopes">scopes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>></code> | scopes block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Can be one of enabled, disabled. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.registryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}.

---

##### `expiryDate`<sup>Optional</sup> <a name="expiryDate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.expiryDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#id ContainerRegistryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `savePasswordToFile`<sup>Optional</sup> <a name="savePasswordToFile" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.savePasswordToFile"></a>

- *Type:* java.lang.String

Saves password to file. Only works on create. Takes as argument a file name, or a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#save_password_to_file ContainerRegistryToken#save_password_to_file}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.scopes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>>

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#scopes ContainerRegistryToken#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Can be one of enabled, disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#status ContainerRegistryToken#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#timeouts ContainerRegistryToken#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes">putScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetExpiryDate">resetExpiryDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetSavePasswordToFile">resetSavePasswordToFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putScopes` <a name="putScopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes"></a>

```java
public void putScopes(IResolvable OR java.util.List<ContainerRegistryTokenScopes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putScopes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts"></a>

```java
public void putTimeouts(ContainerRegistryTokenTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

---

##### `resetExpiryDate` <a name="resetExpiryDate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetExpiryDate"></a>

```java
public void resetExpiryDate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetId"></a>

```java
public void resetId()
```

##### `resetSavePasswordToFile` <a name="resetSavePasswordToFile" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetSavePasswordToFile"></a>

```java
public void resetSavePasswordToFile()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryToken;

ContainerRegistryToken.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryToken;

ContainerRegistryToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryToken;

ContainerRegistryToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList">ContainerRegistryTokenCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopes">scopes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList">ContainerRegistryTokenScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDateInput">expiryDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryIdInput">registryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFileInput">savePasswordToFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopesInput">scopesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFile">savePasswordToFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.credentials"></a>

```java
public ContainerRegistryTokenCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList">ContainerRegistryTokenCredentialsList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopes"></a>

```java
public ContainerRegistryTokenScopesList getScopes();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList">ContainerRegistryTokenScopesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeouts"></a>

```java
public ContainerRegistryTokenTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference">ContainerRegistryTokenTimeoutsOutputReference</a>

---

##### `expiryDateInput`<sup>Optional</sup> <a name="expiryDateInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDateInput"></a>

```java
public java.lang.String getExpiryDateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryIdInput"></a>

```java
public java.lang.String getRegistryIdInput();
```

- *Type:* java.lang.String

---

##### `savePasswordToFileInput`<sup>Optional</sup> <a name="savePasswordToFileInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFileInput"></a>

```java
public java.lang.String getSavePasswordToFileInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.scopesInput"></a>

```java
public java.lang.Object getScopesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `expiryDate`<sup>Required</sup> <a name="expiryDate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `savePasswordToFile`<sup>Required</sup> <a name="savePasswordToFile" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.savePasswordToFile"></a>

```java
public java.lang.String getSavePasswordToFile();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenConfig <a name="ContainerRegistryTokenConfig" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenConfig;

ContainerRegistryTokenConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .registryId(java.lang.String)
//  .expiryDate(java.lang.String)
//  .id(java.lang.String)
//  .savePasswordToFile(java.lang.String)
//  .scopes(IResolvable)
//  .scopes(java.util.List<ContainerRegistryTokenScopes>)
//  .status(java.lang.String)
//  .timeouts(ContainerRegistryTokenTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.registryId">registryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.expiryDate">expiryDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#id ContainerRegistryToken#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.savePasswordToFile">savePasswordToFile</a></code> | <code>java.lang.String</code> | Saves password to file. Only works on create. Takes as argument a file name, or a file path. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.scopes">scopes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>></code> | scopes block. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.status">status</a></code> | <code>java.lang.String</code> | Can be one of enabled, disabled. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#registry_id ContainerRegistryToken#registry_id}.

---

##### `expiryDate`<sup>Optional</sup> <a name="expiryDate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.expiryDate"></a>

```java
public java.lang.String getExpiryDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#expiry_date ContainerRegistryToken#expiry_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#id ContainerRegistryToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `savePasswordToFile`<sup>Optional</sup> <a name="savePasswordToFile" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.savePasswordToFile"></a>

```java
public java.lang.String getSavePasswordToFile();
```

- *Type:* java.lang.String

Saves password to file. Only works on create. Takes as argument a file name, or a file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#save_password_to_file ContainerRegistryToken#save_password_to_file}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.scopes"></a>

```java
public java.lang.Object getScopes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>>

scopes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#scopes ContainerRegistryToken#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Can be one of enabled, disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#status ContainerRegistryToken#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenConfig.property.timeouts"></a>

```java
public ContainerRegistryTokenTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#timeouts ContainerRegistryToken#timeouts}

---

### ContainerRegistryTokenCredentials <a name="ContainerRegistryTokenCredentials" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenCredentials;

ContainerRegistryTokenCredentials.builder()
    .build();
```


### ContainerRegistryTokenScopes <a name="ContainerRegistryTokenScopes" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenScopes;

ContainerRegistryTokenScopes.builder()
    .actions(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | Example: ["pull", "push", "delete"]. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#type ContainerRegistryToken#type}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

Example: ["pull", "push", "delete"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#actions ContainerRegistryToken#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#name ContainerRegistryToken#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#type ContainerRegistryToken#type}.

---

### ContainerRegistryTokenTimeouts <a name="ContainerRegistryTokenTimeouts" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenTimeouts;

ContainerRegistryTokenTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#create ContainerRegistryToken#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#default ContainerRegistryToken#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#update ContainerRegistryToken#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#create ContainerRegistryToken#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#default ContainerRegistryToken#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#delete ContainerRegistryToken#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/resources/container_registry_token#update ContainerRegistryToken#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenCredentialsList <a name="ContainerRegistryTokenCredentialsList" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenCredentialsList;

new ContainerRegistryTokenCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get"></a>

```java
public ContainerRegistryTokenCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ContainerRegistryTokenCredentialsOutputReference <a name="ContainerRegistryTokenCredentialsOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenCredentialsOutputReference;

new ContainerRegistryTokenCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials">ContainerRegistryTokenCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentialsOutputReference.property.internalValue"></a>

```java
public ContainerRegistryTokenCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenCredentials">ContainerRegistryTokenCredentials</a>

---


### ContainerRegistryTokenScopesList <a name="ContainerRegistryTokenScopesList" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenScopesList;

new ContainerRegistryTokenScopesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get"></a>

```java
public ContainerRegistryTokenScopesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a>>

---


### ContainerRegistryTokenScopesOutputReference <a name="ContainerRegistryTokenScopesOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenScopesOutputReference;

new ContainerRegistryTokenScopesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenScopes">ContainerRegistryTokenScopes</a> OR com.hashicorp.cdktf.IResolvable

---


### ContainerRegistryTokenTimeoutsOutputReference <a name="ContainerRegistryTokenTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.container_registry_token.ContainerRegistryTokenTimeoutsOutputReference;

new ContainerRegistryTokenTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.containerRegistryToken.ContainerRegistryTokenTimeouts">ContainerRegistryTokenTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



