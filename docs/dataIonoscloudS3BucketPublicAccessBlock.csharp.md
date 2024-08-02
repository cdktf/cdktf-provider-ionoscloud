# `dataIonoscloudS3BucketPublicAccessBlock` Submodule <a name="`dataIonoscloudS3BucketPublicAccessBlock` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudS3BucketPublicAccessBlock <a name="DataIonoscloudS3BucketPublicAccessBlock" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block ionoscloud_s3_bucket_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudS3BucketPublicAccessBlock(Construct Scope, string Id, DataIonoscloudS3BucketPublicAccessBlockConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig">DataIonoscloudS3BucketPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig">DataIonoscloudS3BucketPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls">ResetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy">ResetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls">ResetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets">ResetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBlockPublicAcls` <a name="ResetBlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicAcls"></a>

```csharp
private void ResetBlockPublicAcls()
```

##### `ResetBlockPublicPolicy` <a name="ResetBlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetBlockPublicPolicy"></a>

```csharp
private void ResetBlockPublicPolicy()
```

##### `ResetIgnorePublicAcls` <a name="ResetIgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetIgnorePublicAcls"></a>

```csharp
private void ResetIgnorePublicAcls()
```

##### `ResetRestrictPublicBuckets` <a name="ResetRestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.resetRestrictPublicBuckets"></a>

```csharp
private void ResetRestrictPublicBuckets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3BucketPublicAccessBlock.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3BucketPublicAccessBlock.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3BucketPublicAccessBlock.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

DataIonoscloudS3BucketPublicAccessBlock.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataIonoscloudS3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudS3BucketPublicAccessBlock to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudS3BucketPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudS3BucketPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput">BlockPublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput">BlockPublicPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput">IgnorePublicAclsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput">RestrictPublicBucketsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlockPublicAclsInput`<sup>Optional</sup> <a name="BlockPublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAclsInput"></a>

```csharp
public object BlockPublicAclsInput { get; }
```

- *Type:* object

---

##### `BlockPublicPolicyInput`<sup>Optional</sup> <a name="BlockPublicPolicyInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicyInput"></a>

```csharp
public object BlockPublicPolicyInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `IgnorePublicAclsInput`<sup>Optional</sup> <a name="IgnorePublicAclsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAclsInput"></a>

```csharp
public object IgnorePublicAclsInput { get; }
```

- *Type:* object

---

##### `RestrictPublicBucketsInput`<sup>Optional</sup> <a name="RestrictPublicBucketsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```csharp
public object RestrictPublicBucketsInput { get; }
```

- *Type:* object

---

##### `BlockPublicAcls`<sup>Required</sup> <a name="BlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; }
```

- *Type:* object

---

##### `BlockPublicPolicy`<sup>Required</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `IgnorePublicAcls`<sup>Required</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; }
```

- *Type:* object

---

##### `RestrictPublicBuckets`<sup>Required</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlock.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudS3BucketPublicAccessBlockConfig <a name="DataIonoscloudS3BucketPublicAccessBlockConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DataIonoscloudS3BucketPublicAccessBlockConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    object BlockPublicAcls = null,
    object BlockPublicPolicy = null,
    object IgnorePublicAcls = null,
    object RestrictPublicBuckets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls">BlockPublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy">BlockPublicPolicy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls">IgnorePublicAcls</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets">RestrictPublicBuckets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#bucket DataIonoscloudS3BucketPublicAccessBlock#bucket}.

---

##### `BlockPublicAcls`<sup>Optional</sup> <a name="BlockPublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicAcls"></a>

```csharp
public object BlockPublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#block_public_acls DataIonoscloudS3BucketPublicAccessBlock#block_public_acls}.

---

##### `BlockPublicPolicy`<sup>Optional</sup> <a name="BlockPublicPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```csharp
public object BlockPublicPolicy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#block_public_policy DataIonoscloudS3BucketPublicAccessBlock#block_public_policy}.

---

##### `IgnorePublicAcls`<sup>Optional</sup> <a name="IgnorePublicAcls" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```csharp
public object IgnorePublicAcls { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#ignore_public_acls DataIonoscloudS3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `RestrictPublicBuckets`<sup>Optional</sup> <a name="RestrictPublicBuckets" id="@cdktf/provider-ionoscloud.dataIonoscloudS3BucketPublicAccessBlock.DataIonoscloudS3BucketPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```csharp
public object RestrictPublicBuckets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/data-sources/s3_bucket_public_access_block#restrict_public_buckets DataIonoscloudS3BucketPublicAccessBlock#restrict_public_buckets}.

---



