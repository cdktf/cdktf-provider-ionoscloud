# `data_ionoscloud_mongo_user`

Refer to the Terraform Registory for docs: [`data_ionoscloud_mongo_user`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user).

# `dataIonoscloudMongoUser` Submodule <a name="`dataIonoscloudMongoUser` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudMongoUser <a name="DataIonoscloudMongoUser" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user ionoscloud_mongo_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUser(Construct Scope, string Id, DataIonoscloudMongoUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig">DataIonoscloudMongoUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig">DataIonoscloudMongoUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRoles` <a name="PutRoles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles"></a>

```csharp
private void PutRoles(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putRoles.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts"></a>

```csharp
private void PutTimeouts(DataIonoscloudMongoUserTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudMongoUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudMongoUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudMongoUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudMongoUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudMongoUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudMongoUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudMongoUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudMongoUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudMongoUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.roles">Roles</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList">DataIonoscloudMongoUserRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference">DataIonoscloudMongoUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.rolesInput">RolesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.roles"></a>

```csharp
public DataIonoscloudMongoUserRolesList Roles { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList">DataIonoscloudMongoUserRolesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeouts"></a>

```csharp
public DataIonoscloudMongoUserTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference">DataIonoscloudMongoUserTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.rolesInput"></a>

```csharp
public object RolesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudMongoUserConfig <a name="DataIonoscloudMongoUserConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string Username,
    string Database = null,
    string Id = null,
    object Roles = null,
    DataIonoscloudMongoUserTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The id of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.username">Username</a></code> | <code>string</code> | The username to search for. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.database">Database</a></code> | <code>string</code> | The database. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.id">Id</a></code> | <code>string</code> | Id of the backup unit. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.roles">Roles</a></code> | <code>object</code> | roles block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The id of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#cluster_id DataIonoscloudMongoUser#cluster_id}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#username DataIonoscloudMongoUser#username}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Id of the backup unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#id DataIonoscloudMongoUser#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.roles"></a>

```csharp
public object Roles { get; set; }
```

- *Type:* object

roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#roles DataIonoscloudMongoUser#roles}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserConfig.property.timeouts"></a>

```csharp
public DataIonoscloudMongoUserTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts">DataIonoscloudMongoUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#timeouts DataIonoscloudMongoUser#timeouts}

---

### DataIonoscloudMongoUserRoles <a name="DataIonoscloudMongoUserRoles" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserRoles {
    string Database = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.role">Role</a></code> | <code>string</code> | A list of mongodb user roles. Examples: read, readWrite, readAnyDatabase. |

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#database DataIonoscloudMongoUser#database}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRoles.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

A list of mongodb user roles. Examples: read, readWrite, readAnyDatabase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#role DataIonoscloudMongoUser#role}

---

### DataIonoscloudMongoUserTimeouts <a name="DataIonoscloudMongoUserTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#create DataIonoscloudMongoUser#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#default DataIonoscloudMongoUser#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#delete DataIonoscloudMongoUser#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#update DataIonoscloudMongoUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#create DataIonoscloudMongoUser#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#default DataIonoscloudMongoUser#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#delete DataIonoscloudMongoUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/data-sources/mongo_user#update DataIonoscloudMongoUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudMongoUserRolesList <a name="DataIonoscloudMongoUserRolesList" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get"></a>

```csharp
private DataIonoscloudMongoUserRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataIonoscloudMongoUserRolesOutputReference <a name="DataIonoscloudMongoUserRolesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserRolesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataIonoscloudMongoUserTimeoutsOutputReference <a name="DataIonoscloudMongoUserTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudMongoUserTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudMongoUser.DataIonoscloudMongoUserTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



