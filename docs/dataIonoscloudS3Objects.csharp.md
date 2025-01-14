# `dataIonoscloudS3Objects` Submodule <a name="`dataIonoscloudS3Objects` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3Objects <a name="DataIonoscloudS3Objects" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects ionoscloud_s3_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudS3Objects(Construct Scope, string Id, DataIonoscloudS3ObjectsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig">DataIonoscloudS3ObjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType">ResetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner">ResetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys">ResetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter">ResetStartAfter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetEncodingType` <a name="ResetEncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetEncodingType"></a>

```csharp
private void ResetEncodingType()
```

##### `ResetFetchOwner` <a name="ResetFetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetFetchOwner"></a>

```csharp
private void ResetFetchOwner()
```

##### `ResetMaxKeys` <a name="ResetMaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetMaxKeys"></a>

```csharp
private void ResetMaxKeys()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetStartAfter` <a name="ResetStartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.resetStartAfter"></a>

```csharp
private void ResetStartAfter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3Objects.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3Objects.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3Objects.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3Objects.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudS3Objects resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudS3Objects to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudS3Objects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3Objects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes">CommonPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys">Keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners">Owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput">EncodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput">FetchOwnerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput">MaxKeysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput">StartAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType">EncodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner">FetchOwner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys">MaxKeys</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter">StartAfter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CommonPrefixes`<sup>Required</sup> <a name="CommonPrefixes" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.commonPrefixes"></a>

```csharp
public string[] CommonPrefixes { get; }
```

- *Type:* string[]

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.keys"></a>

```csharp
public string[] Keys { get; }
```

- *Type:* string[]

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.owners"></a>

```csharp
public string[] Owners { get; }
```

- *Type:* string[]

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `EncodingTypeInput`<sup>Optional</sup> <a name="EncodingTypeInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingTypeInput"></a>

```csharp
public string EncodingTypeInput { get; }
```

- *Type:* string

---

##### `FetchOwnerInput`<sup>Optional</sup> <a name="FetchOwnerInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwnerInput"></a>

```csharp
public object FetchOwnerInput { get; }
```

- *Type:* object

---

##### `MaxKeysInput`<sup>Optional</sup> <a name="MaxKeysInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeysInput"></a>

```csharp
public double MaxKeysInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `StartAfterInput`<sup>Optional</sup> <a name="StartAfterInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfterInput"></a>

```csharp
public string StartAfterInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `EncodingType`<sup>Required</sup> <a name="EncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.encodingType"></a>

```csharp
public string EncodingType { get; }
```

- *Type:* string

---

##### `FetchOwner`<sup>Required</sup> <a name="FetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.fetchOwner"></a>

```csharp
public object FetchOwner { get; }
```

- *Type:* object

---

##### `MaxKeys`<sup>Required</sup> <a name="MaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.maxKeys"></a>

```csharp
public double MaxKeys { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `StartAfter`<sup>Required</sup> <a name="StartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.startAfter"></a>

```csharp
public string StartAfter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3Objects.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3ObjectsConfig <a name="DataIonoscloudS3ObjectsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudS3ObjectsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Delimiter = null,
    string EncodingType = null,
    object FetchOwner = null,
    double MaxKeys = null,
    string Prefix = null,
    string StartAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType">EncodingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner">FetchOwner</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys">MaxKeys</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter">StartAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#bucket DataIonoscloudS3Objects#bucket}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#delimiter DataIonoscloudS3Objects#delimiter}.

---

##### `EncodingType`<sup>Optional</sup> <a name="EncodingType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.encodingType"></a>

```csharp
public string EncodingType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#encoding_type DataIonoscloudS3Objects#encoding_type}.

---

##### `FetchOwner`<sup>Optional</sup> <a name="FetchOwner" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.fetchOwner"></a>

```csharp
public object FetchOwner { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#fetch_owner DataIonoscloudS3Objects#fetch_owner}.

---

##### `MaxKeys`<sup>Optional</sup> <a name="MaxKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.maxKeys"></a>

```csharp
public double MaxKeys { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#max_keys DataIonoscloudS3Objects#max_keys}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#prefix DataIonoscloudS3Objects#prefix}.

---

##### `StartAfter`<sup>Optional</sup> <a name="StartAfter" id="@cdktf/provider-ionoscloud.dataIonoscloudS3Objects.DataIonoscloudS3ObjectsConfig.property.startAfter"></a>

```csharp
public string StartAfter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/data-sources/s3_objects#start_after DataIonoscloudS3Objects#start_after}.

---



